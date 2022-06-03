import tdca from "@/assets/data/tdcaMatches.json";
import mpcl from "@/assets/data/mpclMatches.json";
import { Matches } from "@/model/matches";
import { Team } from "@/model/teams";

const getMatchListFromJson = (json: Match[]): Matches[] => {
  const matchesList: Matches[] = [];
  json.forEach((match: Match) => {
    matchesList.push(
      new Matches(
        match.id,
        match.type,
        match.date,
        match.time,
        match.isHome,
        new Team(match.team, match.teamImg),
        match.venue,
        match.series,
        match.result
      )
    );
  });
  return matchesList;
};

export default function getMatchesList(): Matches[] {
  let matchesList: Matches[] = [];
  matchesList = getMatchListFromJson(tdca);
  matchesList = matchesList.concat(getMatchListFromJson(mpcl));
  return matchesList;
}
