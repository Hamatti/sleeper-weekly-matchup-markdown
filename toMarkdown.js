const HEADER = `Me|Score|-|Score|Opponent
----|----|----|---|----`;

function extractPlayer(nameNode) {
  let name = nameNode.querySelector("div:first-child").textContent;
  let position = nameNode.querySelector("div.player-pos").textContent;

  let [pos, team] = position.split("-");

  console.log({ name, pos, team });
  return [name.trim(), pos.trim(), team.trim()];
}

async function createAndCopyMDTable() {
  const matchupRows = document.querySelectorAll(".player-matchup-body-row");

  const rows = Object.values(matchupRows).map((node) => {
    let names = node.querySelectorAll(".player-name");
    let scores = node.querySelectorAll(".player-scoring .score");
    let isBench = node.querySelector(".position").textContent == "BN";

    let [homePlayer, awayPlayer] = Object.values(names).map((n) =>
      extractPlayer(n)
    );
    let [homeScore, awayScore] = Object.values(scores).map(
      (n) => n.textContent
    );

    let [homeName, homePosition, homeTeam] = homePlayer;
    let [awayName, awayPosition, awayTeam] = awayPlayer;

    return {
      isBench,
      markdownRow: `${homeName} (${homePosition}, ${homeTeam})|${homeScore}|-|${awayScore}|${awayName} (${awayPosition}, ${awayTeam})`,
    };
  });

  const active = rows.filter((row) => !row.isBench);
  const bench = rows.filter((row) => row.isBench);

  const activeTable = `${HEADER}\n${active
    .map((r) => r.markdownRow)
    .join("\n")}`;
  const benchTable = `${HEADER}\n${bench.map((r) => r.markdownRow).join("\n")}`;

  const output = `${activeTable}\n\n**Bench**\n\n${benchTable}`;
  console.log(output);

  await navigator.clipboard.writeText(output);
}

createAndCopyMDTable();
