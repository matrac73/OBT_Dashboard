import axiosInstance from "./AxiosConfig";

export interface DataPoint {
  date: string;
  gCO2eq: number;
}

/**
 * GET carbon emissions data in the form of a 
 */
 export async function FetchC02EmissionData(section:string) {
  const response = axiosInstance
    .get<DataPoint[]>(`${section}/test`)
    .then((response) => {
      const data = response.data;
      console.log(`Received ${data.length} data points`);
      return data;
    });
  return response;
}