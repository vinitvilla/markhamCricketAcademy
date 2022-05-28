interface Team {
    name: string;
    imgUrl: string;
}

interface Match {
    id: number;
    type: string;
    date: string;
    time: string;
    isHome: boolean;
    team: string;
    teamImg: string;
    venue: string;
    series: string;
}