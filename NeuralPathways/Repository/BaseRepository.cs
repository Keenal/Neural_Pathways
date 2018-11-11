using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using System.Data.SqlClient;
using Newtonsoft.Json;
using NeuralPathways.Models;

namespace NeuralPathways.Repository
{
    public class BaseRepository
    {
        private IDbConnection Connection => new SqlConnection(_connection);
        private readonly string _connection;
        protected static User loggedInUser = new User();

        //default constructor
        public BaseRepository(string connection)
        {
            _connection = connection;
        }

        /// <summary>
        /// executes the commands
        /// </summary>
        /// <param name="procedureName"></param>
        /// <param name="parameters"></param>
        /// <returns></returns>
        protected async Task ExecuteAsync(string procedureName, object parameters = null)
        {
            using (var connection = Connection)
            {
                connection.Open();

                await connection.ExecuteAsync(procedureName, parameters, commandType: CommandType.StoredProcedure).ConfigureAwait(false);
            }
        }

        /// <summary>
        /// takes a list of objects
        /// and returns a whole string of json result, unformatted. Ex. 5 user objects all in one string
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="procedureName"></param>
        /// <param name="parameters"></param>
        /// <returns></returns>
        protected async Task<IEnumerable<T>> JsonResultAsync<T>(string procedureName, DynamicParameters parameters = null)
        {
            return JsonConvert.DeserializeObject<IEnumerable<T>>(await JsonResultAsync(procedureName, parameters));
        }

        /// <summary>
        /// returns a string in json 
        /// </summary>
        /// <param name="procedureName"></param>
        /// <param name="parameters"></param>
        /// <returns></returns>
        protected async Task<string> JsonResultAsync(string procedureName, object parameters = null)
        {
            using (var connection = Connection)
            {
                //opens the Db connection.
                connection.Open();

                //Gets the info from the specified Stored Procedure.
                var results = await connection.QueryAsync<string>(
                    procedureName,
                    parameters,
                    commandType: CommandType.StoredProcedure).ConfigureAwait(false);

                //turns the json into a long json string.
                return string.Join(string.Empty, results);
            }
        }

        /// <summary>
        /// returns only the first row of the json result
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="procedureName"></param>
        /// <param name="parameters"></param>
        /// <returns></returns>
        protected async Task<T> FirstJsonResultAsync<T>(string procedureName, DynamicParameters parameters)
        {
            //Calls to JsonResult which grabs the JSON string from the specified stored procedure.
            //It will then convert the json to the specified type (i.e. User model, student model, tutor model etc.).
            return JsonConvert.DeserializeObject<T>(await JsonResultAsync(procedureName, parameters).ConfigureAwait(false));
        }
    }
}