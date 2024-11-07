import axios from "axios";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;
const SERVER_PORT = import.meta.env.VITE_SERVER_PORT;

export interface Results {
    fudd: number;
    bugs: number;
}
export const useGetVotingResults = () => {
    const getVotes = async () => {
        const results: Results = {
            fudd: 0,
            bugs: 0
        };
        const {data} = await axios.get(`${SERVER_URL}:${SERVER_PORT}/api/results`);
        data.forEach((vote: {id: number, choice: string}) => {
            if (vote.choice === "Elmer J. Fudd") {
                results.fudd++;
            } else if (vote.choice === "Bugs Bunny") {
                results.bugs++;
            }
        });
        return results;
    }

    return { getVotes };
}