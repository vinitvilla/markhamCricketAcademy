import moment from "moment";
import type { Team } from "./teams";

export class Matches {
  id: number;
  type: string;
  date: Date;
  isHome: boolean;
  opponentTeam: Team;
  venue: string;
  series: string;
  result: string;

  constructor(
    id: number,
    type: string,
    date: string,
    time: string,
    isHome: boolean,
    opponentTeam: Team,
    venue: string,
    series: string,
    result: string
  ) {
    this.id = id;
    this.type = type;
    this.isHome = isHome;
    this.date = moment(`${date} ${time}`, "MM-DD-YYYY HH:mm a").toDate();
    this.opponentTeam = opponentTeam;
    this.venue = venue;
    this.series = series;
    this.result = result;
  }

  getId: () => number = () => this.id;
  setId: (id: number) => void = (id: number) => (this.id = id);

  getType: () => string = () => this.type;
  setType: (type: string) => void = (type: string) => (this.type = type);

  isHomeMatch: () => boolean = () => this.isHome;
  setHomeMatch: (isHome: boolean) => void = (isHome: boolean) =>
    (this.isHome = isHome);

  getDate: () => Date = () => this.date;
  setDate: (date: Date) => void = (date: Date) => (this.date = date);

  getOpponentTeam: () => Team = () => this.opponentTeam;
  setOpponentTeam: (opponent: Team) => void = (opponent: Team) =>
    (this.opponentTeam = opponent);

  getVenue: () => string = () => this.venue;
  setVenue: (venue: string) => void = (venue: string) => (this.venue = venue);

  getSeries: () => string = () => this.series;
  setSeries: (series: string) => void = (series: string) =>
    (this.series = series);

  getResult: () => string = () => this.result;
  setResult: (result: string) => void = (result: string) =>
    (this.result = result);
}
