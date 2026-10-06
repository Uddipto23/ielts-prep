/* ============================================================
   Day 2 · Set 1 · "Tea Times"

   This passage is taken from a published Cambridge IELTS book.
   If you do not have the right to republish it, do NOT upload this
   file. day2-practice.html detects that it is missing and simply
   runs with the three original sets (42 questions).
   ============================================================ */
window.TEA_TIMES_SET=(function(){

const HEAD_TIP="A heading matches the <b>main idea of the whole paragraph</b>, never one interesting detail. If a heading fits only a single sentence, it is a distractor.";

const HEADINGS_TEA=[
  ["i","Diverse drinking methods"],
  ["ii","Limited objections to drinking tea"],
  ["iii","Today’s continuing tradition – in Britain and China"],
  ["iv","Tea – a beverage of hospitality"],
  ["v","An important addition – tea with milk"],
  ["vi","Tea and alcohol"],
  ["vii","The everyday beverage in all parts of the world"],
  ["viii","Tea on the move"],
  ["ix","African tea"],
  ["x","The fall in the cost of tea"],
  ["xi","The value of tea"],
  ["xii","Tea-drinking in Africa"],
  ["xiii","Hospitality among the Bedouin"]
];

return {key:"s1",title:"Tea Times",theme:"Matching headings + completion",
 lede:"Your own practice passage, with the nine-paragraph matching headings task. Paragraph F is done for you.",
 time:"20 minutes",types:"headings · completion",
 paras:[
 ["A","The chances are that you have already drunk a cup or glass of tea today. Perhaps you are sipping one as you read this. Tea, now an everyday beverage in many parts of the world, has over the centuries been an important part of rituals of hospitality both in the home and in wider society."],
 ["B","Tea originated in China, and in Eastern Asia tea-making and drinking ceremonies have been popular for centuries. Tea was first shipped to North-Western Europe by English and Dutch maritime traders in the sixteenth century. At about the same time, a land route from the Far East, via Moscow, to Europe was opened up. Tea also figured in America’s bid for independence from British rule – the Boston Tea Party."],
 ["C","As, over the last four hundred years, tea-leaves became available throughout much of Asia and Europe, the ways in which tea was drunk changed. The Chinese considered the quality of the leaves and the ways in which they were cured all important. People in other cultures added new ingredients besides tea-leaves and hot water. They drank tea with milk, sugar, spices like cinnamon and cardamom, and herbs such as mint or sage. The variations are endless. For example, in Western Sudan, on the edge of the Sahara Desert, sesame oil is added to milky tea on cold mornings. In England tea, unlike coffee, acquired a reputation as a therapeutic drink that promoted health. Indeed, in European and Arab countries as well as in Persia and Russia tea was praised for its restorative and health-giving properties. One Dutch physician, Cornelius Blankaart, advised that to maintain health a minimum of eight to ten cups a day should be drunk, and that up to 50 to 100 daily cups could be consumed with safety."],
 ["D","While European coffee houses were frequented by men discussing politics and closing business deals, respectable middle-class women stayed at home and held tea parties. When the price of tea fell in the nineteenth century poor people took up the drink with enthusiasm. Different grades and blends of tea were sold to suit every pocket."],
 ["E","Throughout the world today, few religious groups object to tea drinking. In Islamic cultures, where drinking of alcohol is forbidden, tea and coffee consumption is an important part of social life. However, Seventh-Day Adventists, recognising the beverage as a drug containing the stimulant caffeine, frown upon the drinking of tea."],
 ["F","Nomadic Bedouin are well known for traditions of hospitality in the desert. According to Middle Eastern tradition, guests are served both tea and coffee from pots kept ready on the fires of guest tents where men of the family and male visitors gather. Cups of ‘bitter’ cardamom coffee and glasses of sugared tea should be constantly refilled by the host."],
 ["G","For over a thousand years, Arab traders have been bringing Islamic culture, including tea drinking, to northern and western Africa. Techniques of tea preparation and the ceremonial involved have been adapted. In West African countries, such as Senegal and The Gambia, it is fashionable for young men to gather in small groups to brew Chinese ‘gunpowder’ tea. The tea is boiled with large amounts of sugar for a long time."],
 ["H","Tea drinking in India remains an important part of daily life. There, tea made entirely with milk is popular. ‘Chai’ is made by boiling milk and adding tea, sugar and some spices. This form of tea making has crossed the Indian Ocean and is also popular in East Africa, where tea is considered best when it is either very milky or made with water only. Curiously, this ‘milk or water’ formula has been carried over to the preparation of instant coffee, which is served in cafes as either black, or sprinkled on a cup of hot milk."],
 ["I","In Britain, coffee drinking, particularly in the informal atmosphere of coffee shops, is currently in vogue. Yet, the convention of afternoon tea lingers. At conferences, it remains common practice to serve coffee in the morning and tea in the afternoon. Contemporary China, too, remains true to its long tradition. Delegates at conferences and seminars are served tea in cups with lids to keep the infusion hot. The cups are topped up throughout the proceedings. There are as yet no signs of coffee at such occasions."]
 ],
 groups:[
  {kind:"headings",
   instr:"The passage has nine paragraphs (A–I). Choose the most suitable heading for each paragraph from the list of headings. There are more headings than paragraphs, so you will not use all of them. One has been done for you as an example (Paragraph F).",
   tip:HEAD_TIP,
   headings:HEADINGS_TEA,
   example:{p:"F",a:"xiii"},
   items:[
    {p:"A",a:"iv",e:"The paragraph builds to its point: tea has been part of <b>rituals of hospitality</b> at home and in society. Heading vii is the trap. “Everyday beverage” is only a passing phrase in the middle of the sentence, not what the paragraph is about. This is one of the closest calls in the set."},
    {p:"B",a:"viii",e:"Origins in China, shipping to Europe by sea, a land route via Moscow, even the Boston Tea Party: this is tea <b>travelling</b> from place to place."},
    {p:"C",a:"i",e:"Milk, sugar, spices, herbs, sesame oil, and the sentence <b>“The variations are endless.”</b> Heading v is too narrow: milk is just one of many additions."},
    {p:"D",a:"x",e:"“When the <b>price of tea fell</b> in the nineteenth century, poor people took up the drink.” The topic sentence of the paragraph is almost the heading."},
    {p:"E",a:"ii",e:"“<b>Few religious groups object</b> to tea drinking” is the first sentence, and the rest names the one exception. Heading vi is a trap: alcohol appears only as a contrast."},
    {p:"G",a:"xii",e:"Arab traders bringing the <b>custom of tea drinking</b> to Africa, and young men gathering to brew it. Headings ix and xii are very close; the published key chooses xii because the paragraph describes the drinking custom, not a type of tea."},
    {p:"H",a:"v",e:"“Tea made <b>entirely with milk</b> is popular”, then chai, then the ‘milk or water’ formula. The whole paragraph is about milk."},
    {p:"I",a:"iii",e:"Afternoon tea lingering in Britain, and China <b>remaining true to its long tradition</b> of serving tea at conferences. Both halves are about a tradition that continues today."}
   ]},
  {kind:"gap",
   instr:"Complete the sentences below. Use <b>NO MORE THAN THREE WORDS</b> from the passage for each blank space.",
   items:[
    {s:"For centuries, both at home and in society, tea has had an important role in ________.",a:["rituals of hospitality","hospitality"],e:"Paragraph A: “an important part of <b>rituals of hospitality</b> both in the home and in wider society”. Three words, or just <i>hospitality</i>."},
    {s:"Falling tea prices in the nineteenth century meant that people could choose the ________ of tea they could afford.",a:["grades and blends","grade and blend","grades","grade","blends","blend","different grades and blends"],e:"Paragraph D: “Different <b>grades and blends</b> of tea were sold to suit every pocket.” The published key lists ‘different grades and blends’, but that is four words. <i>Grades and blends</i> stays inside the limit."},
    {s:"Because it contains ________, Seventh-Day Adventists do not approve of the drinking of tea.",a:["caffeine","the stimulant caffeine","stimulant caffeine"],e:"Paragraph E: “a drug containing the stimulant <b>caffeine</b>”. Check your spelling: a correct idea with a wrong spelling scores zero."},
    {s:"In the desert, one group that is well known for its traditions of hospitality is the ________.",a:["bedouin","bedouins","nomadic bedouin","nomadic bedouins"],e:"Paragraph F: “<b>Nomadic Bedouin</b> are well known for traditions of hospitality in the desert.” Your skim label for F should already have been <i>hospitality</i>."},
    {s:"In India, ________, as well as tea, are added to boiling milk to make ‘chai’.",a:["sugar and spices","sugar, spices","spices and sugar"],e:"Paragraph H: ‘Chai’ is made by boiling milk and adding tea, <b>sugar and some spices</b>. Dropping <i>some</i> keeps you within three words."},
    {s:"In Britain, while coffee is in fashion, afternoon tea is still a ________.",a:["convention","lingering convention"],e:"Paragraph I: “Yet, the <b>convention</b> of afternoon tea <b>lingers</b>.” The question turns the verb <i>lingers</i> into <i>lingering</i>; the noun is <i>convention</i>."}
   ]}
 ]};

})();
