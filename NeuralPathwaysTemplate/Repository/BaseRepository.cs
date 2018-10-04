using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using System.Data.SqlClient;
using Newtonsoft.Json;
namespace NeuralPathwaysTemplate.Repo
{
    public class BaseRepo
    {

        private IDbConnection Connection => new SqlConnection(ConnectionString);
        private string ConnectionString = "";
        public BaseRepo()
        {
        }
        public async Task TestConnection()
        {
            using (IDbConnection conn = Connection)
            {

                string query = "SELECT * FROM USERS";
                conn.Open();
                var result = await conn.QueryAsync<String>(query);
            }
        }
        //Execute Async
        protected async Task ExecuteAsync<T>(string procdureName, object parameters = null)
        {
            using (var connection = Connection)
            {
                connection.Open();
                await connection.ExecuteAsync(procdureName, parameters, commandType: CommandType.StoredProcedure).ConfigureAwait(false);

            }
        }
        protected async Task<IEnumerable<T>> JsonResultAsync<T>(string procdureName, DynamicParameters parameters = null)
        {
            using (var connection = Connection)
            {
                connection.Open();
                return await connection.QueryAsync<T>(procdureName, parameters, commandType: CommandType.StoredProcedure).ConfigureAwait(false);
            }
        }
        protected async Task<T> FirstJsonResultAsync<T>(string procdureName, DynamicParameters parameters = null)
        {
            using (var connection = Connection)
            {
                connection.Open();
                var result = await connection.QueryAsync(procdureName, parameters, commandType: CommandType.StoredProcedure);
                return JsonConvert.DeserializeObject<T>(
                   string.Join(string.Empty, result)
               );
            }
        }
    }
}