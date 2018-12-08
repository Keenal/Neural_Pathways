using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NeuralPathways.Models
{
    public class QuestionNumber
    {
        [JsonProperty("number")]
        public string Number { get; set; }
    }
}
