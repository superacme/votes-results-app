import './App.css'
import {Results, useGetVotingResults} from "./services/use-get-voting-results.ts";
import {useEffect, useState} from "react";
export const App = () => {

    const [results, setResults] = useState<Results>({fudd: 0, bugs: 0});
    const { getVotes } = useGetVotingResults();

    useEffect(() => {
        setInterval(async () => {
            const results = await getVotes();
            setResults(results);
        }, 3000);
    }, []);

    return (
        <>
            <div className={"flex-col space-y-10"}>
                <p className="text-xl font-medium text-gray-700">Election Results</p>
                <div className={"block flex items-center space-x-4"}>
                    <div className={"flex flex-col space-y-5"}>
                        <p className="text-xl font-medium text-gray-700">{results.fudd}</p>
                        <div className="group block flex-shrink-0 bg-gray-300 rounded-md p-2">
                            <div className="flex items-center">
                                <div>
                                    <img
                                        alt=""
                                        src="/results/fudd.png"
                                        className="inline-block h-20 w-20 rounded-full"
                                    />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-700">Elmer J. Fudd</p>
                                    <p className="text-xs font-medium text-gray-500 ">Archenemy of Bugs Bunny</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"flex flex-col space-y-5"}>
                        <p className="text-xl font-medium text-gray-700">{results.bugs}</p>
                        <div className="group block flex-shrink-0 bg-gray-300 rounded-md p-2">
                            <div className="flex items-center">
                                <div>
                                    <img
                                        alt=""
                                        src="/results/bugs.jpg"
                                        className="inline-block h-20 w-20 rounded-full"
                                    />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-700">Bugs Bunny</p>
                                    <p className="text-xs font-medium text-gray-500">American cartoon character</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
