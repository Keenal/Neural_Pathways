using System;
using System.Collections.Generic;
using System.Text;

namespace NeuralPathwaysTests
{
    public class BaseTest
    {
        protected readonly string _connection;
        public BaseTest()
        {
            _connection =
                "Server=tcp:neuralpathways.database.windows.net,1433;Initial Catalog=NeuralPathways;Persist Security Info=False;User ID=npdev;Password=!qa@ws3ed;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";

        }
    }
}
