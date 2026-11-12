/* ============================================================
   WEEKLY TEST 1 (Reading module): original practice passages (not from any published test)
   Difficulty rises from Passage 1 (easiest) to Passage 3 (hardest),
   as in the real exam. 40 questions in total.

   The researchers named in Passage 3 are fictional.

   To add another test later, copy this file to weekly-test-2.js and weekly-test-2.html, change
   the id/title/content, and point the new page at it.

   Question kinds:
     tfng   True / False / Not Given           a: "T" | "F" | "NG"
     yng    Yes / No / Not Given               a: "Y" | "N" | "NG"
     gap    type words from the passage        a: ["answer", "alternative"]
     select choose from a list (headings etc.) a: "key"   (group.list holds the choices)
     mcq    multiple choice, one answer        a: "A".."D"  (opts holds the texts)
   ============================================================ */
(window.READING_TESTS = window.READING_TESTS || []).push({
id: "w1",
set: "weekly1-reading",
title: "Weekly Test 1",
blurb: "Bees in cities · Tree rings · Slow innovation",
passages: [

/* ============================== PASSAGE 1 ============================== */
{
 title: "Honeybees Move to the City",
 level: "Easier",
 paras: [
  ["A", "For most of the twentieth century, beekeeping was thought of as a rural pursuit, something done at the edge of an orchard or on a farm where flowers grew in abundance. Over the past two decades, however, hives have appeared on the roofs of hotels, offices and apartment blocks in cities around the world. Paris, London and New York all now have thousands of urban colonies, and the number is still rising."],
  ["B", "Part of the appeal is that cities can offer bees a surprisingly varied diet. Farmland is often dominated by a single crop that flowers for only a few weeks, after which foraging bees have little to eat. Parks, gardens, street trees and balcony planters, by contrast, come into flower at different times through the season. Beekeepers in several cities report that their colonies produce as much honey as hives in the countryside, and sometimes more."],
  ["C", "Another attraction is the warmth. Buildings and pavements hold heat, so a city can be several degrees warmer than the land around it. Bees in cities may begin foraging earlier in spring and continue later into autumn. Pesticide use is also generally lower in urban areas than on intensively farmed land, which some beekeepers believe gives their colonies a health advantage. Researchers advise caution, however, because city air carries its own pollutants, and not all of them are well understood."],
  ["D", "The popularity of urban hives has led to an unexpected problem. Honeybees are not wild animals in the way many people suppose; they are managed insects, kept in much the same way as livestock. Ecologists point out that thousands of managed colonies now compete for nectar and pollen with the many species of wild bee that live in cities, most of which nest alone rather than in hives. Where flowers are scarce, the honeybees can win. Some conservation groups therefore argue that a person who wishes to help pollinators would do more good by planting flowers than by installing a hive."],
  ["E", "City authorities have responded in different ways. Some have encouraged beekeeping by offering training courses and permitting hives on public buildings. Others require beekeepers to register their colonies, mainly so that disease can be tracked if it appears. A small number of cities have placed limits on how many hives may be kept within a given area, although the figure chosen is usually a matter of judgement rather than evidence, since nobody knows exactly how many colonies a city’s flowers can support."],
  ["F", "Beekeepers themselves tend to emphasise the educational value of the hobby. People who keep bees often become more aware of what is flowering near them and when, and many start to plant accordingly. Schools that have hives report that children are more willing to learn about insects. Whether urban beekeeping helps bees as a whole remains debated; what seems clear is that it has changed how many city residents think about the natural world."]
 ],
 groups: [
  { kind: "tfng",
    instr: "Do the following statements agree with the information given in Passage 1? Choose <b>TRUE</b> if the statement agrees with the information, <b>FALSE</b> if it contradicts the information, or <b>NOT GIVEN</b> if there is no information on this.",
    items: [
     { s: "During most of the twentieth century, beekeeping was mainly a countryside activity.", a: "T",
       e: "Paragraph A: it was “thought of as a <b>rural pursuit</b>” for “most of the twentieth century”. A direct paraphrase." },
     { s: "Paris has more urban bee colonies than London or New York.", a: "NG",
       e: "Paragraph A says all three cities have “thousands” of colonies. <b>No comparison between them is made</b>. The statement invents a ranking." },
     { s: "In farming areas, the flowers of a single crop are available to bees throughout the whole season.", a: "F",
       e: "Paragraph B: a single crop “flowers for <b>only a few weeks</b>”, after which bees “have little to eat”. The statement says the opposite." },
     { s: "A city can be warmer than the countryside around it.", a: "T",
       e: "Paragraph C: a city “can be <b>several degrees warmer</b> than the land around it”." },
     { s: "Bees in cities are less affected by air pollution than bees in the countryside.", a: "NG",
       e: "Paragraph C only says city air “carries its own pollutants”. <b>Nothing compares city bees with country bees</b> on pollution, so you cannot say either way." },
     { s: "Honeybees are managed in a way that is similar to the keeping of livestock.", a: "T",
       e: "Paragraph D: “managed insects, kept in much the same way as <b>livestock</b>”." },
     { s: "Most species of wild bee in cities live together in hives.", a: "F",
       e: "Paragraph D: most wild species “<b>nest alone rather than in hives</b>”. The statement reverses it." }
    ] },
  { kind: "gap",
    instr: "Complete the sentences below. Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.",
    items: [
     { s: "Bees in cities may begin foraging earlier in ________.", a: ["spring"],
       e: "Paragraph C: “begin foraging earlier in <b>spring</b>”." },
     { s: "Some cities ask beekeepers to ________ their colonies so that disease can be tracked.", a: ["register"],
       e: "Paragraph E: “require beekeepers to <b>register</b> their colonies”." },
     { s: "The number of hives allowed in an area is usually a matter of ________ rather than evidence.", a: ["judgement", "judgment"],
       e: "Paragraph E: “a matter of <b>judgement</b> rather than evidence”. Both UK (judgement) and US (judgment) spellings are accepted." },
     { s: "Some conservation groups say that planting ________ would help pollinators more than installing a hive.", a: ["flowers"],
       e: "Paragraph D: “do more good by <b>planting flowers</b> than by installing a hive”." },
     { s: "Managed honeybees and wild bees compete for nectar and ________.", a: ["pollen"],
       e: "Paragraph D: “compete for nectar and <b>pollen</b>”." },
     { s: "Schools that have hives say children are more willing to learn about ________.", a: ["insects"],
       e: "Paragraph F: “children are more willing to learn about <b>insects</b>”." }
    ] }
 ]
},

/* ============================== PASSAGE 2 ============================== */
{
 title: "What Tree Rings Tell Us",
 level: "Medium",
 paras: [
  ["A", "Every year, a tree in a temperate climate adds a new layer of wood beneath its bark. In spring the wood grows quickly and is pale; in late summer growth slows and the wood is darker and denser. Together the two bands form a ring, and counting the rings of a felled trunk gives the age of the tree. Few people realise that the rings carry far more information than age alone."],
  ["B", "The width of a ring depends on conditions during that growing season. In a year of ample rain and moderate temperatures a tree grows well and the ring is wide; in a drought year the ring is narrow. Because trees of the same species in a region experience the same weather, their ring patterns resemble one another, rather like a barcode. An American astronomer, A. E. Douglass, who was interested in a possible link between sunspots and climate, noticed this similarity in the early twentieth century and realised its potential."],
  ["C", "The technique that grew from his work, known as cross-dating, matches patterns between trees. The rings of a living tree can be matched with those of an older, dead tree whose outer rings overlap in time, and that dead tree with an older one still. By chaining such overlaps together, researchers have built continuous records reaching back thousands of years. Timber from old buildings, and wood preserved in bogs and lakebeds, has extended these records far beyond the lifespan of any living tree."],
  ["D", "Archaeologists use such records to date wooden objects and structures. If the pattern in a roof beam matches a section of a known record, the year in which the tree was felled can often be identified, sometimes to the exact season. Because timber was commonly used within a few years of being cut, this gives a dependable estimate of when a building was put up. Several historic houses have been redated in this way, occasionally by a century or more."],
  ["E", "Climate scientists value the rings as a record of weather from before instruments existed. Wide and narrow rings reveal runs of wet and dry years, and in some cases the density of the late-summer wood can indicate summer temperatures. Reconstructions of this kind have suggested that some historic droughts were more severe than any recorded in the modern era, which matters for those planning the water supplies of cities. Yet the method has limits: ring width responds to many influences at once, and a narrow ring can result from insect attack or from crowding by neighbouring trees as easily as from drought."],
  ["F", "A further limitation is geographical. Trees in tropical forests often grow throughout the year, so they do not form clear annual rings, and the technique works best in regions with marked seasons. Researchers are therefore experimenting with other approaches, including the chemical analysis of wood, to extend the method to places where ring counting fails."]
 ],
 groups: [
  { kind: "select",
    instr: "Passage 2 has six paragraphs, <b>A–F</b>. Choose the correct heading for each paragraph from the list of headings below. There are more headings than paragraphs, so you will not use all of them.",
    list: { title: "List of headings", items: [
      ["i", "A natural record with more to offer than age"],
      ["ii", "Why rainfall matters more than temperature"],
      ["iii", "A pattern shared by neighbouring trees, and the man who noticed it"],
      ["iv", "Building a record that outlives any single tree"],
      ["v", "Dating the timber in old buildings"],
      ["vi", "The rings as a weather diary, and its pitfalls"],
      ["vii", "Where the method falls short, and what might replace it"],
      ["viii", "The decline of ancient forests"],
      ["ix", "Cutting timber for construction"]
    ] },
    items: [
     { s: "Paragraph A", a: "i",
       e: "The paragraph explains how rings form, then ends: the rings “carry <b>far more information than age alone</b>”. Heading i matches that opening idea." },
     { s: "Paragraph B", a: "iii",
       e: "Ring patterns “resemble one another” in trees of the same species, and Douglass “<b>noticed this similarity</b>”. Heading ii is a trap: rain is only one example of weather, and the paragraph never ranks it above temperature." },
     { s: "Paragraph C", a: "iv",
       e: "Cross-dating chains overlaps to build records “reaching back thousands of years”, <b>far beyond the lifespan of any living tree</b>." },
     { s: "Paragraph D", a: "v",
       e: "Roof beams, redated historic houses: <b>dating timber in buildings</b>. Heading ix is a trap: timber is mentioned, but nothing is said about the construction industry." },
     { s: "Paragraph E", a: "vi",
       e: "The first half is a weather record (droughts, temperatures); the second half begins “Yet the method has limits”. That is why the heading says <b>diary and pitfalls</b>." },
     { s: "Paragraph F", a: "vii",
       e: "Tropical forests lack clear rings (<b>falls short</b>), and researchers try “other approaches, including chemical analysis” (<b>what might replace it</b>)." }
    ] },
  { kind: "gap",
    instr: "Complete the notes below. Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.",
    notes: true,
    items: [
     { s: "In spring the wood is pale; in late summer the wood is darker and ________.", a: ["denser", "dense"],
       e: "Paragraph A: “darker and <b>denser</b>”." },
     { s: "A narrow ring is typically produced in a ________ year.", a: ["drought"],
       e: "Paragraph B: “in a <b>drought</b> year the ring is narrow”." },
     { s: "The technique of matching patterns between trees is known as ________.", a: ["cross-dating", "cross dating"],
       e: "Paragraph C: “known as <b>cross-dating</b>”. The hyphen is optional here." },
     { s: "Records have been extended using wood preserved in bogs and ________.", a: ["lakebeds", "lakebed", "lake beds"],
       e: "Paragraph C: “wood preserved in bogs and <b>lakebeds</b>”." },
     { s: "Archaeologists can often identify the year in which a tree was ________.", a: ["felled"],
       e: "Paragraph D: “the year in which the tree was <b>felled</b> can often be identified”." },
     { s: "A narrow ring can be caused by insect attack or by ________ by neighbouring trees.", a: ["crowding"],
       e: "Paragraph E: “crowding by neighbouring trees”. The noun form must be used." },
     { s: "In tropical forests, trees grow all year and do not form clear ________ rings.", a: ["annual"],
       e: "Paragraph F: “do not form clear <b>annual</b> rings”." }
    ] }
 ]
},

/* ============================== PASSAGE 3 ============================== */
{
 title: "The Quiet Decades",
 level: "Harder",
 paras: [
  ["A", "Newspapers announce breakthroughs as if they change the world overnight. Historians of technology tell a different story. Again and again, a major invention has taken decades to produce its full effect, and the delay has had little to do with the invention itself. Professor Elena Marsh, an economic historian, calls the gap “the quiet decades”: the long interval between the moment a technology appears and the moment it visibly changes how people work and live."],
  ["B", "The standard illustration is the electric motor. When factories began to replace steam engines with electric ones in the late nineteenth century, many owners saw little improvement in output. Marsh explains why. A steam engine drove a single central shaft, and every machine was arranged around it, often on several floors, with belts carrying the power. Early owners simply exchanged the steam engine for an electric motor and left everything else as it was. Only when later managers realised that each machine could have its own small motor, and that the factory could therefore be laid out to suit the flow of work rather than the position of the shaft, did productivity climb. In Marsh’s words, the technology was ready long before the thinking was."],
  ["C", "Dr Kofi Mensah, an engineer who studies how industries adopt new tools, believes that skills are the greater obstacle. A new technology, he points out, arrives without people who know how to use it well. Workers must learn new routines and supervisors must learn new ways of judging quality, while for a time old methods and new ones run side by side. “The first generation to use a tool,” he says, “is rarely the generation that gets the most from it.” Mensah is sceptical of training programmes that promise to close this gap in a matter of months, arguing that much of what matters is learned only through years of practice."],
  ["D", "A third explanation comes from the psychologist Dr Lin Qiao, who focuses on habit rather than economics or skill. She argues that people judge a new tool by the standards of the old one, and so measure it against the wrong yardstick. Early films, for instance, were shot like stage plays, with the camera fixed in front of the actors, because audiences and film-makers alike thought of the new medium in terms of the theatre. It took years for directors to discover that the camera could move and that scenes could be cut together. Novelty, Qiao suggests, is first absorbed into old habits and only later allowed to change them."],
  ["E", "These explanations are not mutually exclusive, but each leads to a different recommendation. Marsh would have organisations redesign their processes around a new technology instead of fitting it into existing ones. Mensah would invest in long-term apprenticeship. Qiao would encourage experimentation that does not have to be justified in terms of the old standards. Yet all three agree on something that runs against the spirit of the age: patience."],
  ["F", "There is a risk of overstating the case. Critics note that not every invention follows a slow path. Marsh concedes that the examples she studies are mostly general-purpose technologies, those useful across many industries, which demand the most adaptation, and that simpler, specialised inventions are often adopted quickly. Her conclusion is therefore a limited one: when a technology is widely applicable, early disappointment is poor evidence that it will fail."],
  ["G", "The practical message for businesses and governments is an uncomfortable one. Investors prefer quick returns, and political cycles are short. A policy that judges a new technology after two or three years may well abandon the very projects that would have paid off later. Marsh suggests that the better question is not “Is it working yet?” but “What would have to change around it before it can?”"]
 ],
 groups: [
  { kind: "mcq",
    instr: "Choose the correct letter, <b>A, B, C or D</b>.",
    items: [
     { s: "What does Marsh mean by “the quiet decades”?",
       opts: ["The period in which an invention is deliberately kept secret", "The time between an invention’s appearance and its visible effect", "A long stretch of history in which little is invented", "The years in which newspapers ignore a new technology"],
       a: "B",
       e: "Paragraph A defines it herself: “the long interval between the moment a technology <b>appears</b> and the moment it <b>visibly changes</b> how people work and live”. Option C sounds close but is wrong: invention does not stop, the effect is delayed." },
     { s: "According to the passage, the first factory owners to buy electric motors",
       opts: ["chose motors that were not powerful enough", "failed to change the arrangement of their machines", "found electric motors more costly than steam engines", "could not find workers able to operate the motors"],
       a: "B",
       e: "Paragraph B: they “left everything else as it was”, keeping the layout built around the central shaft. Options A, C and D are never mentioned (and D belongs to Mensah’s argument about skills, a distractor)." },
     { s: "What is Mensah’s view of training programmes?",
       opts: ["They are most valuable for supervisors", "They should last longer than a few weeks", "They cannot quickly supply what long practice provides", "They are too expensive for most industries"],
       a: "C",
       e: "Paragraph C: he is “sceptical of programmes that promise to close this gap in a matter of months”, because much “is learned only through <b>years of practice</b>”. Option B is the trap: he does not recommend longer programmes, he doubts programmes can do this at all." },
     { s: "What is the main purpose of the example of early films in paragraph D?",
       opts: ["To show that early film-makers lacked money", "To suggest that audiences disliked new media", "To illustrate that new media are first judged by old standards", "To argue that the theatre was a better art form"],
       a: "C",
       e: "Films were “shot like stage plays” because people judged the new medium “in terms of the theatre”. It illustrates Qiao’s point that people judge a new tool by <b>the standards of the old one</b>." }
    ] },
  { kind: "select",
    instr: "Look at the following statements (Questions 31–35) and the list of researchers below. Match each statement with the correct researcher, <b>A, B or C</b>. You may use any letter more than once.",
    list: { title: "List of researchers", items: [
      ["A", "Professor Elena Marsh"],
      ["B", "Dr Kofi Mensah"],
      ["C", "Dr Lin Qiao"]
    ] },
    items: [
     { s: "Organisations should rearrange how work is organised around a new technology.", a: "A",
       e: "Paragraph E: “Marsh would have organisations <b>redesign their processes</b> around a new technology”." },
     { s: "The first people to use a tool are unlikely to benefit from it fully.", a: "B",
       e: "Paragraph C, Mensah: “The first generation to use a tool is <b>rarely the generation that gets the most from it</b>”." },
     { s: "People assess a new tool using the wrong yardstick.", a: "C",
       e: "Paragraph D, Qiao: people “measure it against <b>the wrong yardstick</b>”. The word is repeated almost exactly." },
     { s: "Early disappointment with a widely applicable technology is poor evidence that it will fail.", a: "A",
       e: "Paragraph F: “<b>Her</b> conclusion”, referring back to Marsh: “early disappointment is poor evidence that it will fail”." },
     { s: "Long-term apprenticeship deserves investment.", a: "B",
       e: "Paragraph E: “Mensah would <b>invest in long-term apprenticeship</b>”." }
    ] },
  { kind: "yng",
    instr: "Do the following statements agree with the claims of the writer in Passage 3? Choose <b>YES</b> if the statement agrees with the claims of the writer, <b>NO</b> if the statement contradicts the claims of the writer, or <b>NOT GIVEN</b> if it is impossible to say what the writer thinks about this.",
    items: [
     { s: "The delay between an invention and its effect is usually caused by weaknesses in the invention itself.", a: "N",
       e: "Paragraph A: the delay “has had <b>little to do with the invention itself</b>”. The statement states the opposite." },
     { s: "The three researchers all believe that patience is needed.", a: "Y",
       e: "Paragraph E: “all three agree on something… <b>patience</b>”." },
     { s: "Specialised inventions are generally adopted more slowly than general-purpose ones.", a: "N",
       e: "Paragraph F: “simpler, specialised inventions are <b>often adopted quickly</b>”. The statement reverses the comparison." },
     { s: "Investors have more influence than governments over how new technologies develop.", a: "NG",
       e: "Paragraph G mentions investors and political cycles but <b>never compares their influence</b>." },
     { s: "Judging a new technology after only two or three years can lead to worthwhile projects being abandoned.", a: "Y",
       e: "Paragraph G: a policy that judges a technology after two or three years “may well <b>abandon the very projects</b> that would have paid off later”." }
    ] }
 ]
}

]
});
