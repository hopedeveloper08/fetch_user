import axios from "axios";

async function fetchData() {
  const { data } = await axios.get("https://json.xstack.ir/api/v1/users");
  return data.data;
}

export default fetchData;
