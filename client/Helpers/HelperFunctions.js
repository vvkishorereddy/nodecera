export default {
  replace_: text => {
    return text.replace("-", " ");
  },
  TextTrim: (text, count) => {
    if (text.length < count) return text;
    return text.substring(0, count - 2) + "...";
  },
  modifyJobData: function(data) {
    data.map(job => {
      job.title = this.TextTrim(job.title, 36);
      job.location = this.TextTrim(job.location, 30);
      job.workTypeClass = job.workType;
      job.workType = this.replace_(job.workType);
      job.experience = this.replace_(job.experience);
      return job;
    });
    return data;
  },
  convertDateToUserFormat: function(date) {
    return new Date(date);
  }
};
