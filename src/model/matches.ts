import type { Team } from "./teams";

export class Matches {
    id: number;
    type: string;
    date: Date;
    isHome: boolean;
    opponentTeam: Team;
    venue: string;
    series: string;

    constructor(id: number, type: string, date: string, time: string, isHome: boolean, opponentTeam: Team, venue: string, series: string) {
        this.id = id;
        this.type = type;
        this.isHome = isHome;
        this.date = new Date(`${date} ${time} EDT`)
        this.opponentTeam = opponentTeam;
        this.venue = venue;
        this.series = series;
    }

    getId: () => number = () => this.id;
    setId: (id: number) => void = (id: number) => this.id = id;
    
    getType: () => string = () => this.type;
    setType: (type: string) => void = (type: string) => this.type = type;
    
    getDate: () => Date = () => this.date;
    setDate: (date: Date) => void = (date: Date) => this.date = date;

    getOpponentTeam: () => Team = () => this.opponentTeam;
    setOpponentTeam: (opponent: Team) => void = (opponent: Team) => this.opponentTeam = opponent;

    getVenue: () => string = () => this.venue;
    setVenue: (venue: string) => void = (venue: string) => this.venue = venue;

    getSeries: () => string = () => this.series;
    setSeries: (series: string) => void = (series: string) => this.series = series;
}