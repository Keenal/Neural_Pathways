using Newtonsoft.Json;

namespace NeuralPathways.Models
{
    public class ReportInfo
    {
        [JsonProperty("timesStepOneMissed")]
        public string TimesStepOneMissed { get; set; }

        [JsonProperty("timesStepOneMissedAnsweredA")]
        public string TimesStepOneMissedAnsweredA { get; set; }

        [JsonProperty("timesStepOneMissedAnsweredB")]
        public string TimesStepOneMissedAnsweredB { get; set; }

        [JsonProperty("timesStepOneMissedAnsweredC")]
        public string TimesStepOneMissedAnsweredC { get; set; }

        [JsonProperty("timesStepTwoMissed")]
        public string TimesStepTwoMissed { get; set; }

        [JsonProperty("timesStepTwoMissedAnsweredB")]
        public string TimesStepTwoMissedAnsweredB { get; set; }

        [JsonProperty("timesStepTwoMissedAnsweredC")]
        public string TimesStepTwoMissedAnsweredC { get; set; }

        [JsonProperty("timesStepTwoMissedAnsweredD")]
        public string TimesStepTwoMissedAnsweredD { get; set; }

        [JsonProperty("timesStepThreeMissed")]
        public string TimesStepThreeMissed { get; set; }

        [JsonProperty("timesStepThreeMissedAnsweredA")]
        public string TimesStepThreeMissedAnsweredA { get; set; }

        [JsonProperty("timesStepThreeMissedAnsweredB")]
        public string TimesStepThreeMissedAnsweredB { get; set; }

        [JsonProperty("timesStepThreeMissedAnsweredD")]
        public string TimesStepThreeMissedAnsweredD { get; set; }

        [JsonProperty("mostMissedStep")]
        public string MostMissedStep { get; set; }

        [JsonProperty("secondMostMissedStep")]
        public string SecondMostMissedStep { get; set; }

        [JsonProperty("thirdMostMissedStep")]
        public string ThirdMostMissedStep { get; set; }

        [JsonProperty("averageGrade")]
        public string AverageGrade { get; set; }

        [JsonProperty("lowestGrade")]
        public string LowestGrade { get; set; }

        [JsonProperty("highestGrade")]
        public string HighestGrade { get; set; }
    }
}
