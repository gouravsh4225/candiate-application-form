import BaseAxioApi from "../BaseApi";
import { defaultConfig } from "../../config/envirnoments/default";
const addCandidateForm = (formData) => {
  return BaseAxioApi.post(defaultConfig.addCandidateFormApi, formData)
    .then((res) => {
      const { data, status } = res;
      return {
        data,
        status,
      };
    })
    .catch((error) => {
      const { data, status } = error.response ?? error;
      return {
        data,
        status,
      };
    });
};

export { addCandidateForm };
