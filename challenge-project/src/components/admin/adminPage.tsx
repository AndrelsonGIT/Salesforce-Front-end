import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-google-charts';
import InfoCard from './InfoCard';
import API_URL from "../../services/configuration.ts";

interface UserCountResponse {
    usersCount: number;
}

interface FeedbackResponse {
    feedbackType: string;
    feedbackText: string;
    feedbackNote: number;
}

const AdminPage = () => {
    const [userCountState, setUserCountState] = useState<number>(0);
    const [feedbackState, setFeedbackState] = useState<FeedbackResponse[]>([]);
    const [feedbackAverageNote, setFeedbackAverageNote] = useState<{ [key: string]: number }>({});

    useEffect(() => {
        getUserCount();
        getFeedbackDatas();
    }, []);

    useEffect(() => {
        if (feedbackState.length > 0) {
            const calculateFeedbackAverage = () => {
                const feedbackAverages: { [key: string]: { sum: number; count: number } } = {};

                // Agrupa os feedbacks pelo tipo e calcula a soma e a contagem de cada tipo
                feedbackState.forEach((feedback) => {
                    if (!feedbackAverages[feedback.feedbackType]) {
                        feedbackAverages[feedback.feedbackType] = { sum: 0, count: 0 };
                    }
                    feedbackAverages[feedback.feedbackType].sum += feedback.feedbackNote;
                    feedbackAverages[feedback.feedbackType].count++;
                });

                // Calcula a média para cada tipo de feedback
                const averages: { [key: string]: number } = {};
                Object.keys(feedbackAverages).forEach((type) => {
                    const average = feedbackAverages[type].sum / feedbackAverages[type].count;
                    averages[type] = Number(average.toFixed(2)); // Limita para 2 casas decimais
                });

                setFeedbackAverageNote(averages);
            };

            calculateFeedbackAverage();
        }
    }, [feedbackState]);

    const getUserCount = async () => {
        try {
            const response: AxiosResponse<UserCountResponse> = await axios.get(API_URL + '/user/count');
            setUserCountState(response.data.usersCount);
        } catch (error) {
            console.error('Erro ao obter contagem de usuários:', error);
        }
    };

    const getFeedbackDatas = async () => {
        try {
            const response: AxiosResponse<FeedbackResponse[]> = await axios.get(API_URL + '/feedback');
            setFeedbackState(response.data);
        } catch (error) {
            console.error('Erro ao obter dados de feedback:', error);
        }
    };

    // Convertendo o objeto de médias para um array para uso no PieChart
    const chartData: (string | number)[][] = [['Feedback Type', 'Average Note']];
    Object.entries(feedbackAverageNote).forEach(([type, average]) => {
        chartData.push([type, average]);
    });

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col gap-10 mt-10 md:flex-row">
                <InfoCard value={userCountState} title="Quantidade usuários" imgURL="https://i.ibb.co/zSdgxVz/group-icon-png-15.png" />
                <InfoCard value={feedbackState.length} title="Quantidade feedback" imgURL="https://i.ibb.co/PYng6sd/4658943.png" />
            </div>
            <Chart
                chartType="PieChart"
                data={chartData}
                options={{
                    title: 'Média de avaliação por tipo de feedback',
                }}
                width="100%"
                height="400px"
                legendToggle
            />
        </div>
    );
};

export default AdminPage;
