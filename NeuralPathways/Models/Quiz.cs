using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NeuralPathways.Models
{
    public class Quiz
    {
        [JsonProperty("id")]
        public string Id { get; set; }

        [JsonProperty("grade")]
        public string Grade { get; set; }

        [JsonProperty("assignedStudentsId")]
        public string AssignedStudentsId { get; set; }

        [JsonProperty("questionOneId")]
        public string QuestionOneId { get; set; }

        [JsonProperty("questionTwoId")]
        public string QuestionTwoId { get; set; }

        [JsonProperty("questionThreeId")]
        public string QuestionThreeId { get; set; }
    }
}
