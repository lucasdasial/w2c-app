import { IGetToken, IGetWinners } from "../../@types/api";
import { api } from "../../plugins/axios";

export async function getWinnersData() {
  //getting api token
  return await api
    .post<IGetToken>("/login", {
      email: "foo@bar.com",
      password: "secret",
    })
    // getting data winners
    .then(async (res) => {
      const response = await api.get<IGetWinners>("/winners", {
        headers: {
          Authorization: `Bearer ${res.data.Token}`,
        },
      });
      const jsonWinners = JSON.stringify(response.data.winners);
      return jsonWinners;
    });
}
