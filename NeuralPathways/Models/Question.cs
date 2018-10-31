using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NeuralPathways.Models
{
    public class Question
    {
        [JsonProperty("id")]
        public string Id { get; set; }

        [JsonProperty("questionVariableA")]
        public string QuestionVariableA { get; set; }

        [JsonProperty("questionVariableB")]
        public string QuestionVariableB { get; set; }

        [JsonProperty("questionVariableC")]
        public string QuestionVariableC { get; set; }

        [JsonProperty("questionVariableD")]
        public string QuestionVariableD { get; set; }

        [JsonProperty("questionVariableE")]
        public string QuestionVariableE { get; set; }

        [JsonProperty("questionVariableF")]
        public string QuestionVariableF { get; set; }

        [JsonProperty("questionVariableG")]
        public string QuestionVariableG { get; set; }

        [JsonProperty("questionVariableH")]
        public string QuestionVariableH { get; set; }

        [JsonProperty("questionVariableI")]
        public string QuestionVariableI { get; set; }

        [JsonProperty("questionVariableJ")]
        public string QuestionVariableJ { get; set; }

        [JsonProperty("questionVariableK")]
        public string QuestionVariableK { get; set; }

        [JsonProperty("questionVariableL")]
        public string QuestionVariableL { get; set; }

        [JsonProperty("questionVariableM")]
        public string QuestionVariableM { get; set; }

        [JsonProperty("stepOneAnswer")]
        public string StepOneAnswer { get; set; }

        [JsonProperty("stepTwoAnswer")]
        public string StepTwoAnswer { get; set; }

        [JsonProperty("stepThreeAnswer")]
        public string StepThreeAnswer { get; set; }

    }
}
