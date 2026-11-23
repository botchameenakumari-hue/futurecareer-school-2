// Business Skills Quiz for College Students: a bundle for the shared self-rating test page.
// General guidance only: no statistics, norms, pay figures or outcome claims.
import type { SkillTestBundle, ExtraQuestion } from './types';
import { x, sa, o, sc } from './types';

const BASE = '/services/assessments/business-skills-quiz-for-college-students/';

// Extra statement with a take-it-further step, for the middle answer.
const xu = (stages: string[], d: string, text: string, tip: string, up: string, reverse = false): ExtraQuestion => ({ ...x(stages, d, text, tip, reverse), up });

const domains = [
  {
    key: 'customers',
    name: 'Customers and selling',
    short: 'Finding out what people need and asking them to pay',
    strong: 'You talk to real customers before you build, listen for the problem behind the request, follow up politely and treat a no as information.',
    weak: 'You plan or build first and talk to customers later, or asking for money feels so awkward that you lower the price or stay silent.',
    plan: [
      'Talk to three people who could pay for your idea this week. Ask what they do about the problem today and write down their exact words.',
      'Practise saying your price aloud and then stop talking. Do it with a friend three times before you say it to a real customer.',
      'After the next no, ask one question: what would have made you say yes? Keep a tally of the answers and look for the one that repeats.',
    ],
  },
  {
    key: 'pricing',
    name: 'Pricing and profit',
    short: 'Knowing what one sale really leaves in your hand',
    strong: 'You work out what you keep from each sale after costs and your own time, and you set prices from numbers instead of from fear or copying.',
    weak: 'You copy a rival’s price, cut it the moment someone hesitates, or count the full sale amount as profit without taking away costs and your hours.',
    plan: [
      'Pick one thing you sell or could sell. Write the price, subtract material, delivery, fees and tools, and see what is left from one sale.',
      'Add the hours you spend and divide the profit by those hours. Do this for each item and give more time to the one that pays more per hour.',
      'Before the next discount, work out the profit you would keep at the lower price. If it is too thin, offer something smaller, such as faster delivery.',
    ],
  },
  {
    key: 'cash',
    name: 'Cash and costs',
    short: 'Keeping money coming in before it goes out',
    strong: 'You separate project money from personal money, track what you spend, know your monthly fixed costs and test an idea before you put savings into it.',
    weak: 'You spend on stock, tools or ads before anyone has agreed to pay, and you cannot say how much a project earned once everything is counted.',
    plan: [
      'Open a separate wallet, UPI handle or notebook page for one project. Put only that project’s income and costs through it for two weeks.',
      'Write your fixed monthly costs and divide the total by the profit on one sale. That is the number of sales you need just to break even.',
      'Set a small test budget for the next idea and spend it only after at least one person has agreed to pay or reserve.',
    ],
  },
  {
    key: 'trust',
    name: 'Marketing and trust',
    short: 'Getting known and being believed',
    strong: 'You can say who you help and how in one sentence, show proof such as samples and customer words, and judge marketing by enquiries and sales, not by likes.',
    weak: 'You promise more than you can show, post everywhere without knowing which post brings customers, or wait for people to find you.',
    plan: [
      'Fill in one line: "I help [who] get [what] without [their main worry]". Say it to a friend from another course and see if they can repeat it.',
      'Collect one piece of proof this week, such as a sample, a before and after picture or a short message from someone you helped, with their permission.',
      'Pick two places where your customers already spend time and post only there for two weeks. Count enquiries from each, not likes.',
    ],
  },
  {
    key: 'ops',
    name: 'Operations and teamwork',
    short: 'Delivering what you promised with other people',
    strong: 'You promise dates you can meet, write down who does what, tell people early when something slips and ask what is blocking a teammate before blaming them.',
    weak: 'You promise dates by instinct, carry everything in your head, or let problems grow until the customer or the group finds out for you.',
    plan: [
      'Before promising a date, list the steps, guess the time for each and add about a third for delays. Give the date after that check.',
      'Write the steps of one task you repeat, from first message to delivery, on one page. Ask a friend to follow it and mark where they got confused.',
      'In the next group task, agree names and dates in the group chat in the first meeting, and check in at the halfway point.',
    ],
  },
];

const questions = [
  { d: 'customers', text: 'Before I spend time building something, I ask a few real customers what problem they want solved.' },
  { d: 'pricing', text: 'I can work out what I earn on one sale after the cost of making and delivering it.' },
  { d: 'cash', text: 'I know the difference between money I have earned and money I have actually received.' },
  { d: 'trust', text: 'I can say in one sentence who my product or service is for and why they should pick it.' },
  { d: 'ops', text: 'When I take on work for a team or a customer, I give a delivery date that I can really meet.' },
  { d: 'customers', text: 'I can ask someone for money for my work without apologising.' },
  { d: 'pricing', text: 'I set a price by looking at my costs, my time and what customers can pay, not only by copying others.' },
  { d: 'cash', text: 'I track what I spend on a project, even small amounts, in a sheet or a notebook.' },
  { d: 'trust', text: 'I collect proof, such as a sample or a customer’s message, before I ask people to trust me.' },
  { d: 'ops', text: 'When a teammate is stuck or late, I ask what is blocking them before I blame them.' },
  { d: 'customers', text: 'I assume I already know what customers want, so asking them feels like a waste of time.', reverse: true },
  { d: 'pricing', text: 'I give a discount as soon as a customer hesitates, without checking what it does to my profit.', reverse: true },
  { d: 'cash', text: 'I spend my own or my family’s money on stock, tools or ads before anyone has agreed to buy.', reverse: true },
  { d: 'trust', text: 'I promise results in my marketing that I am not sure I can deliver.', reverse: true },
  { d: 'ops', text: 'I keep the steps of my work in my head, so nobody else could repeat it.', reverse: true },
  { d: 'customers', text: 'After a customer says no, I ask why and write down the answer.' },
  { d: 'pricing', text: 'I know which of the things I sell earns more profit for each hour of my time.' },
  { d: 'cash', text: 'I know roughly how many sales I need each month to cover my fixed costs.' },
  { d: 'trust', text: 'I judge my marketing by how many likes it gets, not by how many people enquire or buy.', reverse: true },
  { d: 'ops', text: 'In group work, I split tasks by who is best at what and write down who does which part.' },
  { d: 'customers', text: 'I follow up with a person who showed interest instead of waiting for them to come back.' },
  { d: 'pricing', text: 'When I work out whether a project is worth doing, I treat my own time as free.', reverse: true },
  { d: 'cash', text: 'I keep personal money and project money separate, even when the project is tiny.' },
  { d: 'trust', text: 'I choose one or two places where my customers already spend time instead of posting everywhere.' },
  { d: 'ops', text: 'When something goes wrong with a customer’s order, I tell them early and offer a fix.' },
];

const tips = [
  'Talk to three people who might pay for your idea this week and ask what they do about the problem today. Write down their words before you change anything in your plan.',
  'Pick one thing you sell or could sell. Write the price, then subtract material, delivery, fees and tools to see what is left in your hand from one sale.',
  'Make two columns in a sheet, one for money earned and one for money received. A sale is only cash once it reaches your account, so note the date each payment arrives.',
  'Fill in this line: "I help [who] get [what] without [their main worry]." Say it to a friend outside your course and see if they can repeat it back.',
  'Before you promise a date, list the steps, guess the time for each and add about a third for delays. Give the date only after that check.',
  'Practise saying your price aloud, then stop talking and wait for the answer. Do it three times with a friend before you say it to a real customer.',
  'Write down your costs, the hours you will spend and the price a customer near you would accept. Choose a price that works for all three, not one copied from a rival.',
  'Keep one notebook page or sheet for each project with the date, amount and reason for every spend. Look at it every Sunday for five minutes.',
  'Collect one piece of proof this week, such as a sample of your work, a before and after picture or a short message from someone you helped, and put it where customers can see it.',
  'The next time a teammate is late, ask "What is making this hard?" before you say anything else. Write down the answer and whether you can remove the block.',
  'Choose one belief about your customers and test it by asking five people a question. Write what you assumed and what they actually said.',
  'Before you offer a discount, calculate the profit you would keep at the lower price. If it becomes too thin, offer something smaller, such as faster delivery.',
  'Set a small test budget for any new idea and spend it only after at least one person has agreed to pay or reserve. Keep the rest of your savings untouched until you see a result.',
  'Rewrite each promise in your posts or pitch so that it says what you did for one real person. Remove any result you cannot back up with proof.',
  'Pick one task you do often and write its steps as a short list. Ask a friend to follow the list and mark the step where they got confused.',
  'After the next no, say "Thank you, what would have made you say yes?" and write the answer in a notebook. Look for the answer that keeps coming back.',
  'Work out the profit and the hours for each thing you sell, then divide profit by hours. Spend more of your time on the one that pays more for each hour.',
  'List your fixed costs for a month, such as software, rent, data and travel. Divide the total by the profit on one sale to see how many sales cover them.',
  'Next to each post or message, note how many people asked a question, booked a call or paid. Judge the post by those numbers and ignore the likes.',
  'Write each person’s name next to a part of the task and agree it in the group chat. Ask each person which part they would like before you decide.',
  'Keep a list of everyone who showed interest with the date you spoke. Message each one within three days with one useful line, not just "any update?".',
  'Add the hours you spent to any project and multiply them by a fair hourly value, even a small one. Check whether the sale still looks worth it.',
  'Open a separate wallet, UPI handle or account for project money, even if it is only a second notebook page for tiny sums. It shows whether the work pays for itself.',
  'Pick two places your customers already visit, such as a college group, a local WhatsApp community or a marketplace, and post only there for the next two weeks.',
  'When something goes wrong, send a short message the same day saying what happened, what you will do and by when. Customers forgive a problem more easily than a surprise.',
];

const tipsUp = [
  'Ask each person one more question: "What did you try last time, and why did it fail?" Look for the pattern across five answers before you build anything.',
  'Do the same sum for every product or service you offer and write the profit per sale beside each. Reprice or drop the one that leaves you with the least.',
  'Add a due date for each unpaid sale and message the customer a day before. At month end, count how many payments arrived on time.',
  'Test your one-line pitch on five people from different courses. Change the words they stumble over until at least four can repeat it.',
  'Track the promised date and the real date for five tasks. If you were late on more than one, add a bigger buffer to your next promise.',
  'Role-play the price talk with a senior or a friend who pushes back. Ask which moment made you lower your price and practise a firm reply for it.',
  'Compare your price with three similar offers and write why yours is higher, lower or the same. If you cannot explain the gap, change the offer or the price.',
  'Sort last month’s spending into must-have, useful and wasted. Cut the wasted group first and see what is left in next month’s sheet.',
  'Turn each piece of proof into a one-line story: who you helped, what you did and what changed. Use one story in each message to a new customer.',
  'After the check-in, write down what you offered to help with and follow up in two days. Notice whether the same person gets stuck on the same type of task.',
  'List your three biggest guesses about customers and mark each as tested or untested. Test one untested guess every week.',
  'Fix a lowest price that you will not go below before the next customer talk. Practise a reply that offers a smaller scope for a lower price instead.',
  'Ask a friend to question your next spend with "who has already said they will pay?" If you cannot name one person, wait a week and collect a yes first.',
  'Ask a customer or friend to read your pitch and underline any claim they doubt. Replace each doubted claim with a sample or a short story.',
  'Hand the written steps to someone for a full task and note the questions they ask. Add each answer to the list so the next person needs fewer.',
  'Keep a tally of the reasons behind each no for a month. Fix the most common reason first, whether it is price, timing, trust or fit.',
  'Try one change, such as a higher price, a bundle or a faster option, on the item with the best profit per hour. Compare profit before and after.',
  'Add your slow weeks to the sheet and see whether the sales you need still fit. Set a smaller target for the weakest week so that you can plan for it.',
  'Set a weekly goal for enquiries or sales instead of posts or followers. If enquiries do not rise in three weeks, change the message or the place.',
  'At the end of the task, ask each person what they learned and what slowed them down. Use the answers to share the next task more fairly.',
  'Set a reminder for three and seven days after each conversation. Record which message got a reply and reuse that style.',
  'Use your hourly value to decide which projects to turn down this month. Keep the ones that pay more than your time is worth, or teach you something you need.',
  'Move a fixed share of each payment into a pot for slow weeks. Look at the pot once a month and note whether the project still pays for itself.',
  'After two weeks, count where enquiries really came from. Keep the place that gave the most conversations and drop the other.',
  'Prepare a short fix list for common problems, such as late delivery, a wrong item or an unclear brief. Use it so that your reply takes two minutes, not a day of worry.',
];

const depthStages = [
  {
    key: 'early',
    label: 'Early years of college',
    description: 'First or second year of BBA, BCom, BTech, BA or BSc, with time to try small things',
    title: 'Run small, cheap tests before you plan anything big',
    body: 'The early years of college are the cheapest time to learn how customers behave. A fest stall, a small paid favour or a skill you offer to ten people costs little and teaches more than a business plan written in your head.',
    actions: [
      'Choose one skill you already have and offer a small paid or trial job to three people you know. Ask each one what they would change.',
      'Keep a one-page money record for every small project, even if it earns only a few rupees.',
      'Join one club or fest team in a role where you must persuade people to join, pay or turn up.',
    ],
  },
  {
    key: 'senior',
    label: 'Final year, MBA or placement season',
    description: 'Last year of a degree, or an MBA or PGDM, with cases, internships and interviews',
    title: 'Turn classroom business ideas into things you have actually done',
    body: 'In the final year you know the vocabulary of business. Interviewers and customers both want to see what you have done with it, so a small real project, a sold item or an organised event counts for more than another definition.',
    actions: [
      'Check the numbers for profit per sale before you recommend any growth plan in your next case.',
      'Write two lines on your CV about something you sold, organised or ran, with what you were responsible for.',
      'Start one small project next to your studies, such as a paid service for a local shop, and keep a simple record of money and hours.',
    ],
  },
  {
    key: 'starter',
    label: 'Running a side project or small business',
    description: 'Already selling a service, product or event while studying',
    title: 'Check your numbers and your customers every month',
    body: 'Once you have sold something, the questions change to who comes back and what is left after costs. Selling a skill as a service (Scalable) grows with proof and repeat customers, though the first ones are slow to come. Tutoring or coaching (Scalable with a business layer) needs a way to find students, and reselling goods (Not so scalable) is capped by your hours and the cash tied up in stock.',
    actions: [
      'List your last ten customers, how each found you and whether they came back, and look for the source that works best.',
      'Test a slightly higher price on the next few customers and compare profit, not only the number of sales.',
      'Write the steps of one order from first message to payment on a page, so a partner could run it without you.',
    ],
  },
  {
    key: 'working',
    label: 'First job, internship or freelance work',
    description: 'Earning already and thinking about a business, a freelance route or a promotion later',
    title: 'Learn business sense from inside a company before you put savings in',
    body: 'A job or internship shows you how customers, prices and delivery work in a real business, without your own money at risk. Use it to watch how the company finds customers and handles complaints, and to test any side idea in small steps on evenings and weekends.',
    actions: [
      'Ask a senior who the main customers are, what they complain about and what makes them stay.',
      'Try any side idea for a few weekends with one real customer and track hours and money before you decide anything bigger.',
      'Work out how many months of costs your savings could cover before you ever consider leaving a salary.',
    ],
  },
];

const depthDomains = {
  customers: {
    why: 'Most failed ideas fail because nobody wanted them enough to pay, not because the product was poor. Talking to real customers early, and asking for the sale clearly, replaces guessing with evidence and costs almost nothing.',
    roles: [
      'Selling a skill directly to customers as a freelancer or small business (Scalable with a business layer: you trade hours at first, so plan who pays, how they find and trust you, and how the work repeats)',
      'Sales, business development and customer success roles inside companies (Scalable with a business layer: consulting or a business of your own is the layer on top of a salaried job)',
      'Campus clubs, fests and internships that need you to pitch to members or sponsors',
    ],
    routine: [
      'Days 1 to 3: Write the one problem you think you could solve and the three kinds of people who have it.',
      'Days 4 to 7: Talk to three of them. Ask what they do today and what annoys them, and do not describe your idea yet.',
      'Days 8 to 11: Describe a small offer and a price to two of them and note exactly what they say.',
      'Days 12 to 14: Follow up with everyone who showed interest and write down the reasons given for each no.',
    ],
    mistakes: [
      'Building the whole thing before asking one customer',
      'Asking friends who will say it is a great idea to be kind',
      'Treating a no as a failure instead of a clue',
    ],
    proof: [
      'A list of customer conversations with their words and the date of each',
      'A first paid or trial job, even a small one, with the person’s feedback',
      'A note of the reasons customers gave for saying no and what you changed',
    ],
    askOthers: 'When you think about the people who might pay me, which of their problems do you think I understand best, and which am I guessing about?',
    talkingPoints: [
      'You talk to customers before you build and write down what they say',
      'You ask for the sale clearly and follow up politely',
      'You treat a no as information and can say what you learned from it',
    ],
    midStep: 'Pick the one customer who showed most interest and ask for a small paid trial this week, with a clear price and a date.',
  },
  pricing: {
    why: 'A price that feels fair to you can still lose money once costs, fees and your own time are counted. Knowing what one sale leaves in your hand lets you decide on discounts, bundles and what to say no to.',
    roles: [
      'Setting your own rates as a freelancer or small business (Scalable with a business layer: price from your costs and hours, and expect crowded fields to compare on price)',
      'Finance, analytics, product and category roles that watch margins (Scalable with a business layer: salaried posts follow one employer’s pay ladder, so a consulting or advisory service is the layer)',
      'Family shops and businesses where prices are often set by habit (Not so scalable when they only resell goods: your hours and the cash tied up in stock limit growth)',
    ],
    routine: [
      'Days 1 to 3: List everything you sell or could sell and the real cost of delivering one unit, including fees and your time.',
      'Days 4 to 7: Work out the profit per sale and the profit per hour for each item.',
      'Days 8 to 11: Test one higher price or one bundle with the next few customers and note the result.',
      'Days 12 to 14: Fix a lowest price for each item and write one reply that offers less scope instead of a lower price.',
    ],
    mistakes: [
      'Copying a rival’s price without knowing their costs',
      'Counting the full sale amount as profit',
      'Giving a discount at the first sign of doubt',
    ],
    proof: [
      'A one-page sheet showing price, costs and profit for each item you sell',
      'A record of a price you tested and what happened to profit',
      'An example of a discount you declined or reshaped and why',
    ],
    askOthers: 'If you were paying for what I offer, what would feel fair, and at what price would you start to doubt the quality?',
    talkingPoints: [
      'You know what you keep from each sale and from each hour',
      'You set prices from costs, time and what customers can pay',
      'You can explain why you did or did not give a discount',
    ],
    midStep: 'Write the profit per hour beside each item you sell and move your next free hours towards the best one.',
  },
  cash: {
    why: 'A business can look busy and still run short of money because customers pay late, stock sits unsold or costs arrive first. Watching cash, not only sales, is what lets a small project keep going while it learns.',
    roles: [
      'Freelancing or small business where one late payment can stop the month (Scalable with a business layer: cash is thin at first, so keep costs low and ask for part payment early)',
      'Accounts, finance and operations roles in companies (Scalable with a business layer: a salaried post has a fixed pay ladder, so an accounting or advisory practice for small firms is the layer)',
      'Student ventures and fest stalls that spend before they earn',
    ],
    routine: [
      'Days 1 to 3: Write down every rupee in and out of one project, with the date, in one place.',
      'Days 4 to 7: Split the sheet into money earned and money received, and mark any payment still waiting.',
      'Days 8 to 11: List your fixed monthly costs and work out how many sales cover them.',
      'Days 12 to 14: Set a test budget for your next idea and decide in advance what must happen before you spend it.',
    ],
    mistakes: [
      'Buying stock or tools before a single customer has agreed to pay',
      'Mixing personal and project money so profit cannot be seen',
      'Treating a sale as cash before the payment arrives',
    ],
    proof: [
      'A simple monthly sheet of money in, money out and money still waiting',
      'A break-even number worked out from your own costs',
      'An example of an idea you tested with a small budget before spending more',
    ],
    askOthers: 'When you look at how I handle money for a project, what would worry you, and what would you want me to track more closely?',
    talkingPoints: [
      'You keep project money separate and track every spend',
      'You know how many sales you need to cover your costs',
      'You test an idea with a small budget before you commit savings',
    ],
    midStep: 'Ask for part payment in advance on your next job, and write the due dates for the rest in a message the customer can see.',
  },
  trust: {
    why: 'People pay someone they believe will deliver. Samples, honest claims and the words of earlier customers build that belief faster than loud promises, and they tell you which message is actually bringing in enquiries.',
    roles: [
      'Freelancing or small business that depends on referrals and reviews (Scalable with a business layer: trust builds slowly, so keep proof and ask happy customers for referrals)',
      'Marketing, brand and content roles (Scalable once you have proof of work, but crowded at entry level)',
      'Placements and internships, where your CV and profile are your first marketing',
    ],
    routine: [
      'Days 1 to 3: Write one sentence on who you help and how, and test it on three people from outside your course.',
      'Days 4 to 7: Collect two pieces of proof, such as a sample and a short customer message, with permission.',
      'Days 8 to 11: Pick two places your customers already visit and post only there, with one proof piece each.',
      'Days 12 to 14: Count enquiries from each place, keep the better one and rewrite one claim you cannot back up.',
    ],
    mistakes: [
      'Promising results you cannot yet show',
      'Posting everywhere and measuring only likes',
      'Hiding past customers instead of asking them for a few words',
    ],
    proof: [
      'A one-line pitch that three strangers could repeat back to you',
      'Samples or customer messages shared with permission',
      'A count of enquiries by source over two weeks',
    ],
    askOthers: 'Looking at how I describe what I do, which claim do you believe, and which would you want proof for?',
    talkingPoints: [
      'You make claims you can back up with a sample or a customer’s words',
      'You know which place or message brings enquiries',
      'You judge marketing by enquiries and sales, not likes',
    ],
    midStep: 'Ask your happiest customer for two lines about what you did, and ask permission to use them where new customers can see.',
  },
  ops: {
    why: 'Winning a customer is only half the work. Delivering on the date you promised, keeping a team organised and fixing problems early is what brings the second order and the referral.',
    roles: [
      'Operations, project and supply chain roles (Scalable with a business layer: a salaried post grows by promotion, so consulting or a small service business is the layer)',
      'Freelancing or small business that depends on delivering on time (Scalable with a business layer: late delivery costs repeat customers, so promise only what you can meet)',
      'Group projects, fests and clubs that need many people to deliver together',
    ],
    routine: [
      'Days 1 to 3: Write the steps of one task you repeat, from first message to delivery.',
      'Days 4 to 7: Give a delivery date for the next task only after guessing the time for each step and adding a buffer.',
      'Days 8 to 11: Share the steps with someone else and see if they can run one order using only the page.',
      'Days 12 to 14: Review what slipped, fix the step that caused it and tell the affected person early next time.',
    ],
    mistakes: [
      'Promising dates by instinct and finding out later they were impossible',
      'Carrying every step in your head',
      'Telling a customer about a delay only after the date has passed',
    ],
    proof: [
      'A one-page checklist for an order or a project that someone else used',
      'A log of promised and real delivery dates',
      'An example of a delay you reported early and how the customer reacted',
    ],
    askOthers: 'When we work together, where do I make it hard for you to know what is happening, and what would you like me to tell you earlier?',
    talkingPoints: [
      'You promise dates you can meet and say so early when they will not hold',
      'You write down who does what in a group',
      'You ask what is blocking a person before you blame them',
    ],
    midStep: 'Make one shared sheet or chat message for the next group task with names, parts and dates, and check it at the halfway point.',
  },
};

const depth = {
  stageHeading: 'Which of these describes you best?',
  stageNote: 'A first-year student, a placement-season MBA and a first-job fresher test business sense in very different ways, so your report changes its extra questions and advice to match.',
  stages: depthStages,
  tips,
  tipsUp,
  strongTip: 'This habit already works for you in business. Note what makes it easy, then use the same move where you are weaker.',
  domains: depthDomains,
  thirtyDay: [
    'Week 1: Begin the routine for your lowest area and note what you tried and what a real person said about it.',
    'Week 2: Finish the 14-day routine and run one small real test with a customer, a classmate or a shopkeeper.',
    'Week 3: Turn to your second-lowest area, try two steps from its plan and keep the first habit going.',
    'Week 4: Retake the quiz, compare the areas with your first result and choose what to test next with a customer.',
  ],
};

const extras = [
  // Early years of college
  xu(['early'], 'customers', 'I have talked to at least one person outside my friend group about a problem I could solve.', 'Ask a senior, a shopkeeper or a relative who runs a business what customers complain about most. Write down two complaints and one thing you could do about each.', 'Repeat the talk with a person from a different kind of business and compare the complaints. Mark any that appear in both lists.'),
  xu(['early'], 'pricing', 'I can explain profit and margin using one example from a shop or service near me.', 'Pick a tea stall, a print shop or a tutor. Guess what they charge, what it costs them and what they keep from one sale, then ask them to check your guess.', 'Do the same for a second business that sells something different and note which one keeps more from each sale.'),
  xu(['early'], 'cash', 'I have a simple record of my pocket money, stipend or earnings for the last month.', 'Write every rupee in and out for one week in a notebook or phone note. At the end, mark what you needed and what you did not.', 'Extend the record to a full month and set one small saving target. On the last day, check whether you reached it and what got in the way.'),
  xu(['early'], 'trust', 'I have taken part in a club, fest or campus event where I had to persuade people to join or pay.', 'Join one event team and take a task that involves talking to people, such as sponsorship, tickets or registrations. Note what made people say yes.', 'Ask the event lead for one thing you did well and one thing to change, and use both at the next event you join.'),
  xu(['early'], 'ops', 'I would rather do a group project alone than work out how to split it.', 'In your next group project, hold a ten-minute meeting to list the tasks and give each one an owner and a date. Doing it once teaches more than ten solo tasks.', 'After the project, ask the group what the split got right and what it missed. Write one rule for your next group.', true),
  // Final year, MBA or placement season
  xu(['senior'], 'customers', 'I can describe a customer’s problem in their own words, not only in a textbook definition.', 'Take a case or product you studied and write the customer’s problem as that person would say it to a friend. Check it with someone who actually uses the product.', 'Show your version to a real customer and ask what you missed. Replace the textbook wording with their phrases.'),
  xu(['senior'], 'pricing', 'In a case study, I check the profit per sale before I recommend a growth plan.', 'Before you suggest a plan in your next case, work out revenue minus direct costs for one unit. If the number is thin, say so in the first line of your answer.', 'Ask a faculty member or senior to review one case answer only for its numbers, and note the first assumption they question.'),
  xu(['senior'], 'cash', 'I can explain why a business that shows a profit on paper can still run out of cash.', 'Write a small example in which a shop sells goods on credit this month and pays its supplier next week. Show how profit appears while cash falls, then explain it to a friend.', 'Add a second example with stock bought months in advance. Explain which one is more dangerous for a new business and why.'),
  xu(['senior'], 'trust', 'My CV and profile mostly list course names, with few things I actually did.', 'Replace each general line with one thing you did, who it was for and what changed. Add a number only if you can show where it came from.', 'Ask a senior to read your CV for ten seconds and say what you did. Rewrite the line they could not repeat.', true),
  xu(['senior'], 'ops', 'I have led or managed part of a real project on which other students depended.', 'Take responsibility for one deliverable in a club, internship or project and set the dates yourself. Keep a short note of what you did when something slipped.', 'Ask the people who depended on you for one point of feedback and write it down. Use it the next time you lead.'),
  // Running a side project or small business
  xu(['starter'], 'customers', 'I know who my last three customers were and how each one found me.', 'Write down the last three customers and where each came from. If you cannot remember, start a simple customer list today.', 'Add the date, what they bought and whether they came back. Look at the list every month to see which source brings repeat customers.'),
  xu(['starter'], 'pricing', 'I tested a higher price in the last three months.', 'Quote the next few customers a slightly higher price and note how many say yes. If sales hold, you may have been charging too little.', 'Try a second price with a different group and compare the number of sales and the profit. Keep the one that leaves more profit, not more sales.'),
  xu(['starter'], 'cash', 'I wait for customers to pay without keeping a list of who still owes me money.', 'Write down every unpaid order with the amount and the date the customer promised to pay. Send a short, polite message the day after that date.', 'For larger jobs, ask for part of the money in advance and note whether late payments become fewer. Keep the list up to date every week.', true),
  xu(['starter'], 'trust', 'I have at least three customers whose words or results I can show others with permission.', 'Ask your three happiest customers for a two-line message about what you did for them, and ask permission before you share it.', 'Turn one message into a short before and after story and put it where new customers find you. Count how many enquiries mention it.'),
  xu(['starter'], 'ops', 'I have a checklist for how an order runs from first message to final delivery.', 'Write the steps from the first message to payment on one page, with who does what. Use it for the next order and fix the step that caused delay.', 'Share the checklist with a partner or a friend who could help and see whether they can run an order with it. Fix whatever they ask about.'),
  // First job, internship or freelance work
  xu(['working'], 'customers', 'In my job or internship, I know who pays the company and what they want from us.', 'Ask a senior who the main customers are, what they complain about and what makes them stay. Write three lines and compare them with your daily tasks.', 'Sit in on one customer call or read ten customer messages. Note one thing your team could do differently and share it with your manager.'),
  xu(['working'], 'pricing', 'I know, even roughly, how my team’s work connects to the company’s profit.', 'Ask your manager how your team’s work earns or saves money for the company. Write one sentence on it and keep it in your notes.', 'Estimate the value of one task you did last month and share it with your manager for correction. Use the answer to choose what to do first.'),
  xu(['working'], 'cash', 'I keep some savings aside that would cover my living costs for a while if my income stopped.', 'Add up your monthly costs and decide how many months you could cover without a salary. Keep adding to your savings until that number feels safe to you and your family.', 'Set a fixed amount aside each month before you spend, and note how many months of costs it covers. Review it whenever your pay or costs change.'),
  xu(['working'], 'trust', 'I could show a small piece of my own work that a stranger would trust, if my employer allows it.', 'Check what you are allowed to share, then keep a sample, a before and after, or a plain description of a project you led, without private data.', 'Ask a colleague which part of your sample they would trust most. Add a short note on the problem you solved and what you saw change.'),
  xu(['working'], 'ops', 'I wait to be given a task instead of spotting what the team needs next.', 'Pick one repeated problem your team faces, write a two-line fix and show your manager. Offer to own it for a month.', 'After the month, share what changed and what you would do next. Keep the note for interviews or for your own venture.', true),
];

const stageAdvice = {
  early: {
    customers: sa('In the early years, nobody expects you to have a business, so you can ask people questions without any pressure.', 'Ask three people what they would pay to have solved and write down their answers before you build anything.', 'Offer one small paid or trial job to a person you know and ask what they would change.'),
    pricing: sa('In the early years, most of your price lessons come from small sales, such as notes, design work or event stalls.', 'For one thing you have sold, write the price, the costs and what was left, and check if your time was worth it.', 'Ask a small shopkeeper how they decide a price and compare it with how you decide yours.'),
    cash: sa('In the early years, the money at risk is usually pocket money or family money, so the habit matters more than the amount.', 'Record every rupee in and out of one small project for two weeks and look at what the record shows.', 'Set one rule: no spending on stock or tools until someone has agreed to pay or reserve.'),
    trust: sa('In the early years, you have no track record, so samples and honest descriptions are your main way to be believed.', 'Make one small sample of your work for a person you know and ask permission to show it.', 'Write one sentence on who you help and how, and test it on a friend from another course.'),
    ops: sa('In the early years, group assignments are your best practice for promising and delivering with other people.', 'In the next group task, write who does what and by when in the group chat in the first meeting.', 'Check in at the halfway point and ask each person what they need to finish.'),
  },
  senior: {
    customers: sa('In the final year, you can explain customer needs well, but you may not have talked to a customer outside class.', 'Pick a local shop or service and ask the owner what customers complain about and how they handle it.', 'Turn what you hear into two lines you could use in an interview answer.'),
    pricing: sa('In the final year, cases and interviews test whether you check numbers before you suggest a plan.', 'In your next case answer, state the profit per unit first and then build the recommendation.', 'Practise one interview answer that explains a price choice using costs, time and customer value.'),
    cash: sa('In the final year, understanding that profit and cash differ is a common question and a useful life skill.', 'Write a three-line example of a profitable business that runs short of cash, and explain it aloud to a friend.', 'Track the cash of one real project, even a small event, from first spend to last payment.'),
    trust: sa('In the final year, your CV and profile are your first marketing, and they are judged on what you actually did.', 'Rewrite two CV lines so each names an action, who it was for and what changed.', 'Ask a senior who has been through placements which line they believe most and which one needs proof.'),
    ops: sa('In the final year, interviewers ask about teams and deadlines, and they listen for specific examples.', 'Write down one project where you owned a deliverable, with the dates and what you did when something slipped.', 'Ask a teammate from that project to say what you did well and what to change.'),
  },
  starter: {
    customers: sa('When you already sell something, your best information is who bought, who did not and who came back.', 'Keep a simple customer list with date, what they bought and how they found you.', 'Message three past customers and ask what they liked and what they nearly did not buy.'),
    pricing: sa('When you already sell something, small price changes can show whether you have been charging too little.', 'Test a slightly higher price on the next few customers and compare profit, not only the number of sales.', 'Write what is included in each price and charge separately for extras.'),
    cash: sa('When you already sell something, mixing project and personal money hides whether the work pays.', 'Use a separate account or UPI handle for project money and review it every Sunday.', 'Work out how many sales cover your fixed costs this month and write the number where you can see it.'),
    trust: sa('When you already sell something, your past customers are your strongest proof and your best source of referrals.', 'Ask three happy customers for two lines of feedback and permission to share it.', 'Count where your last ten enquiries came from and put more effort into the best source.'),
    ops: sa('When you already sell something, delays and mistakes decide whether customers come back.', 'Write the steps of one order on a page and fix the step that caused your last delay.', 'Tell customers early when a date will slip, and say what you will do about it.'),
  },
  working: {
    customers: sa('In a job or internship, you can learn about customers from complaints, calls and renewals without any risk of your own.', 'Ask to sit in on one customer call or read a week of customer messages and note the three most common requests.', 'Share one useful observation with your manager and ask what they would do about it.'),
    pricing: sa('In a job or internship, prices, discounts and margins are decided by people you can watch and question.', 'Ask a senior how the company sets prices and which discounts it will not give.', 'Note one case where the company said no to a discount and why.'),
    cash: sa('In a job or internship, you have a salary that makes testing a side idea cheaper, and a salary that you should protect.', 'Test any side idea with a small budget on evenings and weekends and record money and hours.', 'Work out how many months of costs your savings could cover before you think about leaving.'),
    trust: sa('In a job or internship, what you deliver quietly becomes the proof you can later show.', 'Keep a private folder of work you are allowed to share, with the problem, your part and the result.', 'Ask a colleague to describe in one line what you are known for, and check it matches what you want.'),
    ops: sa('In a job or internship, you see how deadlines, handovers and complaints are handled in a real organisation.', 'Pick one process your team runs and write its steps on a page, then ask what usually goes wrong.', 'Offer to own one small recurring task for a month and report what changed.'),
  },
};

const scenarios = [
  // Customers and selling
  sc('customers', 'You want to sell practice question sets that you wrote yourself to juniors in your department. What do you do first?', [
    o('Ask ten juniors which subject they struggle with and what they would pay, then print a sample for the top answer', 100, 'You are asking the people who will pay before you spend, which is the cheapest way to learn. Write their answers down and sell the first sample set to two of them this week.'),
    o('Print a full set for every subject so that juniors can see how much you offer, then sell the packs near the canteen', 17, 'Printing everything first puts your money in stock before you know what juniors want. Start with five juniors, ask which subject worries them most and print one sample set for it.'),
    o('Copy the subjects a senior sold last year because they worked for that batch', 50, 'A senior’s sales are a useful clue, but another batch may worry about different subjects. Check with a few juniors before you print anything.'),
    o('Post in the batch group and wait to see how many people reply before you do anything else', 33, 'A post can help, but waiting turns it into a guess about demand. Message five juniors directly and ask what they would pay for.'),
  ]),
  sc('customers', 'A shop owner says your service is "too costly" and starts to walk away. What do you do?', [
    o('Run after them with a big discount so that you do not lose your first customer', 17, 'A quick big discount teaches the customer that your first price was not real. Ask what they were comparing you with before you change anything.'),
    o('Thank them, ask what they were comparing it with and what budget they had, and write down the answers', 100, 'A calm question turns a no into information about price, value and competitors. Keep the notes and look for the reason that repeats over five conversations.'),
    o('Send a polite message after a week to ask whether they changed their mind, and offer to explain what the price includes', 67, 'A follow-up is a good habit and many sales come from it. Add one question about what budget or alternative they had in mind, so the message teaches you something too.'),
    o('Decide that shop owners are not serious customers and stop approaching shops', 33, 'One no does not prove a whole group of customers is wrong. Ask a few more owners the same question and look at what they say.'),
  ]),
  sc('customers', 'A customer asks you for something outside what you usually offer, such as a logo when you normally do social media posts. What do you do?', [
    o('Ask what they need it for, then say whether you can do it, offer a smaller version, or name a person you trust who can', 100, 'You listen for the need behind the request and stay honest about your limits. Keep a short list of people you trust, so that a referral becomes an easy answer.'),
    o('Say yes to everything so that they stay happy, and learn it as you go', 33, 'Saying yes can win a customer but risks poor work and a late delivery. Be honest about what you can do and say what extra time you would need.'),
    o('Say you do not do it and end the chat there', 17, 'A flat refusal closes the door and teaches you nothing about what this customer needs. Ask what the logo is for first, because the real need may be smaller.'),
    o('Quote a very high price so that they go away if they were not serious, and say yes only if they accept it without arguing', 50, 'A high quote can protect your time, but it may also hide a customer who would have paid a fair price. Quote what the work is really worth and say what is included.'),
  ]),
  // Pricing and profit
  sc('pricing', 'You make hand-painted phone covers, and a friend tells you to sell them at Rs 250. Materials cost Rs 120, packing and delivery Rs 40, and the payment gateway keeps 2 percent in this example. What do you do? (Example amounts, not real prices.)', [
    o('Sell at Rs 250 because your friend knows the market', 50, 'A friend’s view is useful, but it may not count your fees and hours. Work out what is left after costs, then decide whether Rs 250 is enough.'),
    o('Sell at Rs 200 so that you sell more than anyone else', 17, 'A lower price brings sales but may leave almost nothing after costs and time. Check what is left per cover before you try to win on price.'),
    o('Charge Rs 400 because handmade work is special and customers who care about quality will pay for it', 33, 'A higher price can work when customers see the value, but a number chosen only because it feels special is a guess. Test it on a few customers and note how many say yes.'),
    o('Add fees and your painting hours to the costs, then see if Rs 250 leaves a profit worth your time', 100, 'You count everything that leaves your hand, including your hours, before you choose a price. After this check, test Rs 250 and one higher price on a few customers and compare.'),
  ]),
  sc('pricing', 'A customer asks for 30 percent off for an order of ten items. What is the best reply?', [
    o('Check the profit at that discount first, then offer a smaller discount or a bundle', 100, 'You decide from numbers and still leave room for the customer to feel they won something. Write down your lowest price for bulk orders so that you do not decide under pressure.'),
    o('Agree at once, because ten items is a big order for you and a customer who gets a deep discount may come back with more orders', 17, 'A bigger order is not always more profit, because a deep discount can leave almost nothing per item. Work out the profit at the lower price before you agree.'),
    o('Refuse and say your price is fixed', 33, 'A firm price can be right, but a flat no loses a customer who may order again. Offer a smaller discount or an extra, such as faster delivery, instead.'),
    o('Give the 30 percent but ask for half the money in advance', 67, 'Asking for money in advance is a smart protection, but the deep discount may still leave you with a thin profit. Check the profit first and then ask for the advance.'),
  ]),
  sc('pricing', 'You charge Rs 500 for a two-hour tutoring session and spend one more hour travelling to the student. A parent asks you to lower the fee. What do you work out first? (Example amounts, not real prices.)', [
    o('What you earn per hour once travel is counted, and your lowest worthwhile fee', 100, 'Counting travel shows that Rs 500 is spread over three hours, not two. Decide your lowest fee before the talk, so you can answer calmly.'),
    o('Whether other tutors near you charge less', 50, 'Looking at other tutors is useful, but their costs and quality may differ from yours. Start with what you earn for each hour once travel is counted.'),
    o('Whether you could teach three students together so that each one pays less and you still earn more per hour', 67, 'Group sessions can raise your pay per hour while lowering each fee. Check that the group still suits the students, and compare earnings per hour with your single-student fee.'),
    o('Nothing, because a lower fee will bring more students', 17, 'More students at a lower fee can leave you busier and poorer. Work out your fee per hour before you lower it, and note that tutoring is Scalable with a business layer only when you add a way to find and keep students.'),
  ]),
  // Cash and costs
  sc('cash', 'You are offered Rs 6,000 for a design project, but the customer will pay only after 45 days. You must buy a Rs 2,000 software plan to do the work. What do you do? (Example amounts, not real prices.)', [
    o('Buy the plan from your pocket money and trust the customer to pay on time, since turning down a project may lose a good chance', 33, 'Trust is fine, but you carry the whole risk if the payment is late. Ask for part payment or choose a cheaper tool first.'),
    o('Ask for a part payment in advance to cover the software, and agree dates for the rest in writing', 100, 'You protect your cash and make the payment dates clear before work starts. Keep a copy of the message and note each date in your calendar.'),
    o('Turn down the project because 45 days is too long', 50, 'Saying no may be right, but you can often change the terms instead. Ask whether half can be paid when you start.'),
    o('Do the work and borrow Rs 2,000 from a friend until you are paid', 17, 'Borrowing for a customer’s delay puts a friendship at risk and does not fix the terms. Agree an advance with the customer before you start.'),
  ]),
  sc('cash', 'Your stall at a college fest brought in Rs 8,000 in sales. How do you decide whether it was a good result? (Example amounts, not real prices.)', [
    o('Be happy and plan a bigger stall next time, since Rs 8,000 is a lot of money for a student to earn in a day', 17, 'A big sale figure says nothing about what is left. Subtract all your costs before you decide how well you did.'),
    o('Take away the stock you bought and nothing else', 33, 'Stock is only one cost. Stall fees, helpers, packing, transport and your hours all reduce what you really kept.'),
    o('Subtract stock, stall fee, helpers and a fair value for your time, then compare with what you put in', 100, 'You count everything and compare profit with the effort and money you put in. Write the result down so that you can compare it with the next fest.'),
    o('Compare your sales with what another team earned at the same fest', 50, 'Comparing is useful, but their costs and effort may differ from yours. Look at your own profit first, then use the other team to learn.'),
  ]),
  sc('cash', 'A supplier offers a big discount if you buy 500 units of a product that you have never sold. The 500 units cost Rs 18,000 and your savings are Rs 20,000. What do you do? (Example amounts, not real prices.)', [
    o('Buy all 500 because the discount is too good to miss', 17, 'A discount is not a saving if the units do not sell. You would put almost all your savings into one untested product.'),
    o('Buy 100 at the usual price, see how fast they sell, and order more only when the first batch has gone', 67, 'A small first batch limits the risk and tells you how fast the product moves. Taking pre-orders first can reduce the risk even further.'),
    o('Borrow from a relative so that you can buy 500 and sell the rest later', 33, 'Borrowing for an untested product puts someone else’s money at risk too. Test demand with a small batch before you borrow.'),
    o('Ask the supplier to hold the discount for two weeks while you take pre-orders for a small batch', 100, 'You test demand before you put in money, which is the heart of test-before-you-invest. If enough people reserve, order a bigger batch with some of their advance.'),
  ]),
  // Marketing and trust
  sc('trust', 'You have no customers yet and want people to trust your video editing service. What do you do?', [
    o('Say you are the best editor in the city so that people feel safe', 17, 'A big claim without proof makes people more doubtful, not less. Show what you can do instead of saying it.'),
    o('Offer your first two customers a low price in return for an honest review that you can show to others', 67, 'A low first price in return for honest feedback is a fair way to start. Make sure you also keep a sample of the finished work to show others.'),
    o('Wait until you have finished a paid course before telling anyone', 33, 'A course can help, but it is not proof that you can deliver for a customer. Start with a small real sample while you learn.'),
    o('Edit two sample videos for people you know, with permission to share them, and show those', 100, 'Real samples let a stranger judge your work in a minute. Add one line on what the person needed and what you did.'),
  ]),
  sc('trust', 'A customer posts a harsh review because your delivery was late. What do you do?', [
    o('Message the customer privately, apologise and ask them to remove the review', 50, 'A private apology is a good step, but asking for removal can look like pressure. Offer the fix first and let them decide.'),
    o('Ignore it, since a reply only makes it more visible', 33, 'Silence can look like you do not care. A short, honest reply helps the next customer who reads it.'),
    o('Reply politely, accept what is true, say what you changed and offer a fix', 100, 'People reading the review judge you by your reply. A calm answer with a clear fix often earns more trust than a perfect record.'),
    o('Reply that the customer is lying and post the chat screenshots', 17, 'Arguing in public turns a small complaint into a bigger one. Accept what is true and say what you will change.'),
  ]),
  sc('trust', 'You have Rs 3,000 to spend on finding your first customers for a coaching service. What do you do? (Example amounts, not real prices.)', [
    o('Run two small tests where students or parents already look, such as a school group, and count enquiries', 100, 'You spend a little, learn which place works and keep the rest of your money. Put your best-performing message in the better place next.'),
    o('Spend it all on a big ad across many platforms for a month so that as many people as possible see your name', 17, 'A broad ad spends your whole budget before you know where your customers are. Start with small tests in two places and count enquiries.'),
    o('Spend nothing and wait for word of mouth to bring people', 50, 'Word of mouth is powerful but slow when no one knows you yet. Spend a small amount on a few tests to speed up your learning.'),
    o('Print many pamphlets and hand them out anywhere you can', 33, 'Pamphlets given to anyone reach many people who do not need you. Choose places where your students or parents already gather.'),
  ]),
  // Operations and teamwork
  sc('ops', 'In a group project, one member has not done their part and the deadline is in two days. What do you do?', [
    o('Ask the member privately what is blocking them, agree a smaller task with a time, and keep a backup ready', 100, 'You start with the cause and agree a clear next step, while a backup protects the deadline. Tell the group the new plan so that nobody is surprised.'),
    o('Do their part yourself quietly so that the group does not lose marks and nobody has to argue about it before the deadline', 33, 'This saves the deadline but hides the problem and makes you carry the load again next time. Ask what went wrong first.'),
    o('Message the group to complain about that member', 17, 'Public blame rarely brings the work back. Talk to the member first and focus on what can be done in two days.'),
    o('Tell the faculty member straight away', 50, 'Faculty may need to know in the end, but going there first skips a chance to fix it as a team. Try a direct talk first and tell the faculty member if it does not work.'),
  ]),
  sc('ops', 'You promised a customer delivery by Friday, but your supplier says the goods will arrive on Saturday. What do you do?', [
    o('Wait and hope that the customer does not notice', 17, 'A late delivery that the customer finds out about alone damages trust far more than a warning would. Tell them as soon as you know.'),
    o('Pay extra for a courier from your own pocket and say nothing', 50, 'Fixing it quietly saves the date, but it costs you profit and does not solve the supplier problem. Tell the customer about the risk too.'),
    o('Tell the customer today, give the new date and offer something small for the wait', 100, 'Early honesty gives the customer time to adjust and shows you take the promise seriously. Check the new date with your supplier before you share it.'),
    o('Tell the customer on Friday evening so that the news does not worry them early or spoil their week', 33, 'Waiting to share bad news makes the customer plan around a date that will not hold. Share it as soon as you know.'),
  ]),
  sc('ops', 'You and two friends run a small resale business. You do most of the work, but the profit is split equally. What do you do?', [
    o('Talk to one friend privately and ask them to speak to the other, so that the group chat stays calm', 50, 'A private talk can help, but passing a message through someone else may confuse it. Speak to both and bring a written suggestion.'),
    o('Suggest writing down who does what and how profit is shared, then agree changes together', 100, 'You turn a feeling of unfairness into a clear agreement that all three can see. Review it every month, as the work will change.'),
    o('Keep going and hope the others notice your effort', 33, 'Hope is not a plan, and quiet resentment can end a business. Say what you see and suggest a fair split.'),
    o('Do less work and say nothing', 17, 'Doing less without a word hurts the business and the friendship, and gives no one a chance to fix the split. Name the problem and agree a change.'),
  ]),
  // Early years of college
  { ...sc('customers', 'Early years: you want to earn from a skill such as design, writing or spreadsheet work while you study. How do you find your first customer?', [
    o('Make a website first and wait for people to find it', 33, 'A website can help later, but nobody visits one that no one has heard of. Start with people you can speak to this week.'),
    o('List ten people who could use the skill, offer each a small paid or trial job and ask for feedback', 100, 'Small real jobs for people who already know you are the fastest way to learn what customers value. Selling a skill as a service is a Scalable route when you keep adding proof and better customers.'),
    o('Post on every social page you use that you are available for design, writing or spreadsheet work, and wait for messages to arrive', 50, 'Posting widely costs little, but it tells you nothing about who would pay. Reaching out to ten specific people gives you replies you can learn from.'),
    o('Wait until you finish the course in that skill', 17, 'Waiting for a course to end delays the feedback that teaches you the most. Offer a small job while you learn.'),
  ]), stages: ['early'] },
  { ...sc('cash', 'Early years: you have Rs 5,000 of saved pocket money and want to start a small project. What is the wisest use? (Example amounts, not real prices.)', [
    o('Spend all of it on paid tools, a good bag and a first stock of materials so that the project looks professional from day one', 17, 'Looking professional does not bring customers, and you would have nothing left if the idea needs to change. Spend only on what one real customer needs.'),
    o('Spend half on ads to get many customers at once', 33, 'Ads bring attention, but you do not yet know what message or offer works. Run a tiny test first.'),
    o('Split it equally between three small ideas to see which one works', 67, 'Testing several ideas cheaply is a good instinct. Spread the money in smaller parts so that you keep a reserve, and stop the weakest idea first.'),
    o('Keep most of it, spend only on what one real customer needs, and let the first earnings pay for the next step', 100, 'You limit the risk and let real customers fund the growth. Write down what you spent and what came back after each step.'),
  ]), stages: ['early'] },
  // Final year, MBA or placement season
  { ...sc('pricing', 'Final year or MBA: in a case round, you are asked whether a company should cut its price to beat a rival. What do you do first?', [
    o('Say yes, since lower prices bring more customers', 17, 'Lower prices bring more sales only if the profit per sale survives. Ask for costs and current profit first.'),
    o('Say no, since low prices harm the brand', 33, 'Brand matters, but a flat no skips the numbers. Show the profit at both prices before you decide.'),
    o('Suggest matching the rival’s price exactly, add a launch promotion and tell the interviewer that holding market share matters most', 50, 'Matching can protect sales but may squeeze profit. Check what the match costs before you suggest it.'),
    o('Ask for costs, current profit per unit and what customers care about, then test what the cut does to profit', 100, 'You check the numbers and the customer before choosing, which is what interviewers look for. State your assumption aloud and say what would change your answer.'),
  ]), stages: ['senior'] },
  { ...sc('trust', 'Final year or MBA: an interviewer says, "Tell me about something you sold or organised." You have only run a college event. What do you say?', [
    o('Describe the event, including what you were responsible for, how you got people to join or pay, the numbers you can show and what you would improve', 100, 'A real example with your own part, proof and a lesson is more believable than a big title. Practise it aloud so that it takes under two minutes.'),
    o('Say you have no sales experience, only college events', 33, 'Underselling your event ends the answer too early. Describe what you did, because organising and persuading are real business skills.'),
    o('Give a general talk on your leadership skills', 17, 'General claims are easy to doubt. Pick one real event and describe what you did step by step.'),
    o('Describe the event, but mostly what the team achieved, without saying what you did', 50, 'Teamwork is good to mention, but the interviewer is asking about you. Say which part was yours.'),
  ]), stages: ['senior'] },
  // Running a side project or small business
  { ...sc('pricing', 'You run a small service on the side and customers keep asking for "a little extra" for the same price. What do you do?', [
    o('Give the extra every time, because happy customers who feel well treated will order again and tell their friends about you', 17, 'Free extras slowly eat your profit and your time. Decide what is included before the next order.'),
    o('Write down what each price includes, charge for extras after that, and keep one small free extra as a thank-you', 100, 'A clear list ends arguments and keeps goodwill. Tell new customers the list before they pay.'),
    o('Say no every time', 33, 'A firm line protects your time but can feel cold. Offer extras at a clear small price.'),
    o('Raise your price for everyone at once', 50, 'A higher price may be right, but it does not fix the habit of asking for extras. Write what each price includes first.'),
  ]), stages: ['starter'] },
  { ...sc('cash', 'Your small business had a good month with Rs 25,000 in sales, and a friend says you should spend it on a bigger setup. What do you do? (Example amounts, not real prices.)', [
    o('Take out costs and a fixed amount for yourself, keep a few weeks of costs in reserve, and spend only on the item that would bring the next sales', 100, 'You separate sales from profit and protect the reserve before you grow. If your business is reselling goods (Not so scalable), growth is limited by your hours and the cash tied up in stock, so spend with extra care.'),
    o('Spend it all on the bigger setup straight away, since your friend is right that growth needs investment and a better setup will win larger orders later', 17, 'Sales are not profit, and one slow month could leave you without cash. Count your costs first.'),
    o('Spend it on yourself as a reward, since you worked hard', 33, 'A small reward is fine, but spending all sales leaves nothing for costs or slow weeks. Pay yourself a fixed amount instead.'),
    o('Keep all of it in savings and do nothing new', 50, 'Safety is good, but a small, well-chosen step can help the business learn. Pick one cheap test that could bring more customers.'),
  ]), stages: ['starter'] },
  // First job, internship or freelance work
  { ...sc('customers', 'First job: your manager asks you to call an unhappy customer. You are new. What do you do?', [
    o('Pass it to a senior colleague so that nothing goes wrong', 33, 'Asking for help is sensible, but passing it on every time gives up your best learning chance. Ask the senior to listen in.'),
    o('Call and explain the company’s policy firmly', 17, 'Quoting policy first makes the customer feel unheard. Listen to the problem before you explain.'),
    o('Read the history, call, listen without arguing, say what you will do and by when, and report back', 100, 'You prepare, listen and give a clear next step, which is what upset customers need. Write down what you learned for your own business later.'),
    o('Send a long email with all the reasons the issue happened', 50, 'A written note can help, but a long list of reasons sounds like an excuse. Say what you will do and by when.'),
  ]), stages: ['working'] },
  { ...sc('cash', 'First job: you want to try a side business next to your job. How do you start?', [
    o('Resign first so that you can give the business your full time', 17, 'Leaving before the idea has earned anything puts your whole income at risk. Test first and decide after you have evidence.'),
    o('Wait until you feel completely ready and have saved a very large amount', 33, 'Waiting for perfect readiness often means never starting. Test a small version now.'),
    o('Use office hours for the business when work is slow', 10, 'Using work time for your own business can break your contract and hurt your reputation. Keep it to evenings and weekends.'),
    o('Try it for a few weekends with a small first customer, track hours and money, and decide after a few months', 100, 'You test with little at risk and collect real numbers. Check that your employer allows outside work before you begin.'),
  ]), stages: ['working'] },
];

const phrases = {
  customers: [
    '"What do you do about this problem today, and what is the most annoying part?"',
    '"The price is Rs [amount] for [what is included]. Would that work for you?"',
    '"Thank you. What would have made you say yes?"',
  ],
  pricing: [
    '"After costs and my time, this leaves me about Rs [amount], so my lowest price is Rs [amount]."',
    '"I can lower the price if we reduce the scope. Which part can we leave out?"',
    '"This price includes [list]. Extra changes are Rs [amount] each."',
  ],
  cash: [
    '"I start the work once the first half is paid. The rest is due on [date]."',
    '"I will test this with Rs [amount] and spend more only if [number] people reserve."',
    '"My fixed costs are Rs [amount] a month, so I need [number] sales to break even."',
  ],
  trust: [
    '"I help [who] get [what] without [their main worry]."',
    '"Here is a sample I made for [person], and here is what they said about it."',
    '"I would like to share your message on my page. Is that all right with you?"',
  ],
  ops: [
    '"I can deliver this by [date]. I will tell you early if that changes."',
    '"Here is who does what, and by when. Can we check in on [day]?"',
    '"This slipped because [reason]. This is what I am doing about it, and the new date is [date]."',
  ],
};

const stagePlan = {
  early: [
    'This week, talk to three people who might pay for a skill you have and write down what they say about the problem. Done when you have three short notes, one for each person, in their own words.',
    'Offer one small paid or trial job to a person you know and ask for one change you could make. Done when the job is finished and you have written the one change they asked for.',
    'Keep a one-page record of money in and out of that small job, and work out what was left after costs. Done when your page shows money in, money out and what was left.',
    'Join a club or fest team in a role where you must persuade people, and note what made them say yes. Done when you have written down one reason people said yes.',
  ],
  senior: [
    'Rewrite two CV lines so that each names something you did, who it was for and what changed. Done when each line names what you did, who it was for and what changed.',
    'In your next case or mock interview, state profit per unit before you recommend a plan. Done when you have said the profit per unit aloud before the recommendation.',
    'Start one small paid project for a local shop or a classmate, and keep a record of money and hours. Done when the record shows money in, money out and hours.',
    'Prepare a two-minute story about something you sold or organised, with your part, one number and one lesson. Done when you can tell the story in two minutes with one number.',
  ],
  starter: [
    'List your last ten customers, where each came from and whether they came back. Done when each of the ten customers has a source and a yes or no for coming back.',
    'Test a slightly higher price with the next few customers and compare the profit. Done when you have put the profit at both prices on the same page.',
    'Open a separate account for project money and review it every Sunday. Done when the account is open and you have done one Sunday review.',
    'Write the steps of one order on a page and fix the step that caused your last delay. Done when the order steps are written and the late step has one fix.',
  ],
  working: [
    'Ask a senior who the main customers are and what they complain about, and write three lines. Done when you have three lines written from what the senior told you.',
    'Sit in on one customer call or read a week of customer messages and note the three most common requests. Done when you have a list of the three most common requests.',
    'Test any side idea for a few weekends with one real customer, and track hours and money. Done when you have kept a record for at least three weekends.',
    'Work out how many months of costs your savings would cover before you think about leaving a salary. Done when you have written down the number of months.',
  ],
};

const talk = {
  customers: {
    q: 'When you started out, how did you find your first customer, and what did you learn from the first few no answers?',
    a: 'Ask a shopkeeper, a senior or someone who runs a business. Write down the first customer story and one mistake they would avoid, then try the same move on a small scale this month.',
    line: 'Note: first customer idea is [who]. I will ask [number] people by [date] and write down their words.',
  },
  pricing: {
    q: 'How did you decide your first price, and when did you change it?',
    a: 'Ask for one price they set badly and what they changed. Work out the same numbers for your own item and compare.',
    line: 'Note: price Rs [amount], costs Rs [amount], hours [number], profit per hour Rs [amount].',
  },
  cash: {
    q: 'What was the first money mistake in your business, and what do you track now?',
    a: 'Ask which numbers they check every week and how they handle late payments. Copy one habit into your own sheet and keep it for a month.',
    line: 'Note: fixed costs Rs [amount] a month. Break-even is [number] sales. Test budget Rs [amount].',
  },
  trust: {
    q: 'What made your early customers believe you, and which message actually brought enquiries?',
    a: 'Ask for one piece of proof that worked and one claim they dropped. Use the same kind of proof on your next message and count the enquiries.',
    line: 'Note: my one-line pitch is "[sentence]". My proof is [sample or message]. Best place so far is [place].',
  },
  ops: {
    q: 'How do you keep promises on time, and what do you do the moment you know something will be late?',
    a: 'Ask for the checklist or tool they use and how they tell customers about a delay. Try their way on your next task and note the result.',
    line: 'Note: my checklist is saved at [place]. My buffer is [amount]. I tell people about delays within [time].',
  },
};

const talkTitles = {
  strong: 'Talking to a mentor or shop owner about your strongest area',
  weak: 'Questions to ask about your lowest area',
  intro: 'Bring these to a senior, a teacher or someone who runs a small business, because a person who has done it can tell you what a textbook cannot. Specific questions get answers you can try this week.',
  mode: 'ask' as const,
};

export const bundle: SkillTestBundle = {
  test: {
    id: 'business-skills-quiz-for-college-students',
    slug: 'business-skills-quiz-for-college-students',
    pageUrl: BASE,
    breadcrumbName: 'Business Skills Quiz for College Students',
    metaTitle: 'Business Quiz for College Students | Free Business Skills Quiz',
    metaDescription:
      'Free business quiz for college students: 47 questions on customers, pricing, cash, trust and teamwork. About 15 minutes, no sign-up, scored on judgement.',
    h1Lead: 'Business Quiz',
    h1Accent: 'for College Students',
    eyebrow: 'Customers, pricing, cash, trust and teamwork in real situations',
    heroSub:
      'This business quiz for college students checks your business sense, not your exam marks. You rate what you actually do and choose what you would do in real situations about customers, pricing, cash, trust and teamwork, so the score shows your judgement habits. It works for BBA, BCom, MBA, management and engineering students, uses made-up rupee amounts as examples, and ends with a small test-before-you-invest step for your lowest area.',
    stats: [
      { value: '47', label: 'questions' },
      { value: '15 min', label: 'about, no sign-up' },
      { value: 'Free', label: 'PDF report' },
    ],
    main: 'picker',
    mainChecks: [
      'Five business areas, scored from how you rate yourself and what you choose in everyday situations',
      'About 15 minutes, no sign-up',
      'Advice for your stage, a 14-day routine and a small test to run before you spend any money',
    ],
    reportTitle: 'Business Skills Report',
    reportFile: 'future-career-school-business-skills-report.pdf',
    reportKicker: 'BUSINESS SKILLS REPORT',
    resultKicker: 'Your business skills result',
    scoreLabel: 'Overall business judgement',
    bands: {
      high: 'A relative strength in your answers.',
      mid: 'Developing, with room to grow.',
      low: 'The first area to practise on a real customer or project.',
    },
    domainsHeading: 'Five areas of business sense this quiz checks',
    domainsIntro:
      'Business sense goes wrong in different places for different people. Some students can sell but lose money on every sale, some price well but never ask a customer anything, and some work hard but cannot deliver on time. Your lowest area is the best place to start.',
    domains,
    questions,
    readingTitle: 'How to read your business skills result',
    readingSections: [
      {
        title: 'The score is about judgement habits, not exam marks',
        body: [
          'There is no textbook answer to look up here. Each statement and each situation asks what you actually do, and the scenario choices are scored by how well they protect your customer, your cash and your time.',
          'A student with a high exam score can still price badly, and a student with average marks can have strong business sense. A low area is a habit you have not practised yet, not a fixed weakness.',
        ],
      },
      {
        title: 'Where this quiz connects to turning a skill into income',
        body: [
          'Almost every route that turns a skill into money uses the same five habits: finding who needs it, pricing it, watching cash, earning trust and delivering.',
          'Selling a skill as a service such as design, writing or spreadsheet work is a Scalable route when you keep adding proof, but the field is crowded and trust comes slowly. Tutoring or coaching is Scalable with a business layer, and reselling goods is Not so scalable because your hours and your stock limit it.',
          'None of these routes promises income, and this quiz cannot say which one will suit you. It shows which habit to practise first, so that you can try a small version cheaply before you put in savings.',
        ],
      },
      {
        title: 'Test with real customers before you put in money',
        body: [
          'Your answers show how you see your own habits. Check them with one small real step, such as asking three people what they would pay for, selling one small item, or keeping a money record for two weeks.',
          'Retake the quiz after you have worked on your lowest area for a while. A change in that area suggests the routine helps, and your real customers are the better proof.',
        ],
      },
    ],
    limits: [
      'This is a self-rating tool. It shows how you describe your own habits and choices, and it cannot replace honest feedback from a teacher, a mentor or a customer.',
      'It is not a certificate, a business qualification or an official assessment, and it does not test syllabus knowledge or predict exam marks.',
      'Scores come only from your own answers. They are never set against other students, so no score counts as a pass or a fail.',
      'It does not predict whether a business will succeed or how much you will earn. It points to the habits that are worth practising first.',
      'The rupee amounts in the situations are made-up examples for teaching, not real prices, costs or earnings. Real businesses differ by city, product and customer, so check prices, rules and costs for your own case.',
      'This is general information, not financial advice. Before you borrow money, put in savings or sign anything, get the terms in writing and talk to a trusted adult or an accountant.',
    ],
    faqs: [
      {
        q: 'Is this business quiz for college students free?',
        a: 'Yes. You do not pay or register. The quiz takes about 15 minutes, shows your result as soon as you finish and lets you save it as a PDF.',
      },
      {
        q: 'Can BBA, BCom, MBA and management students take this business quiz?',
        a: 'Yes. It is a business quiz for BBA, BCom, MBA and management students, and engineering and arts students can take it too. You choose your stage before the result, such as early years of college, final year or MBA, running a side project, or a first job.',
      },
      {
        q: 'Are these business quiz questions for BBA students the same as exam questions?',
        a: 'No. They are not syllabus questions with one textbook answer. They are everyday situations about customers, prices, cash, trust and teamwork, and the score shows your judgement habits, not exam marks.',
      },
      {
        q: 'Is there a business quiz for commerce students that needs accounting knowledge?',
        a: 'No accounting knowledge is needed. Commerce and BCom students will recognise the ideas of profit, cost and cash, but every question is written in plain words with small examples.',
      },
      {
        q: 'Are the rupee amounts in the situations real prices?',
        a: 'No. Amounts such as Rs 250 for a phone cover or Rs 6,000 for a design project are made up to practise the thinking: count your costs, protect your cash and check what is left. Real prices and costs depend on your city, product and customers, so work out your own numbers.',
      },
      {
        q: 'How is the score worked out?',
        a: 'You rate each statement from 1 (not true) to 5 (very true), and a statement that describes a poor habit, such as giving a discount at the first doubt, is turned around so that agreeing with it lowers the score. Each situation gives 0 to 100 points, judged by how well your choice protects your customer, your cash and your time. An area score is the average of its answers, and your overall score is the average of the five areas.',
      },
      {
        q: 'What is a good score on a business skills quiz?',
        a: 'There is no pass mark. Your areas are compared with each other, not with other students, so the lowest one shows where a small habit will help most. Retake the quiz after you have tried the routine to see whether it moved.',
      },
      {
        q: 'Will this quiz tell me which business to start?',
        a: 'No. It looks at habits, not at ideas, so it cannot choose a business for you. For routes, selling a skill as a service is Scalable, tutoring or coaching is Scalable with a business layer, and reselling goods is Not so scalable, and the report suggests a small test for each before you spend money.',
      },
      {
        q: 'How can I improve my business skills after the quiz?',
        a: 'Start with your lowest area and take one small real step, such as talking to three customers or recording a project’s money for two weeks. Your report gives a 14-day routine of four steps for that area, and the idea feasibility calculator linked below lets you test your own numbers before you spend.',
      },
    ],
    related: [
      {
        href: '/services/assessments/entrepreneurial-aptitude-test/',
        title: 'Entrepreneurial Aptitude Test',
        description: 'A look at how ready you are to build something of your own, beyond the business habits in this quiz.',
      },
      {
        href: '/tools/student-business-idea-feasibility-calculator/',
        title: 'Student Business Idea Feasibility Calculator',
        description: 'Try your own price, cost and sales numbers on an idea and plan a short test before you spend more.',
      },
      {
        href: '/services/assessments/soft-skills-self-assessment/',
        title: 'Soft Skills Self-Assessment',
        description: 'Five people skills, from leadership to problem solving, rated together in one report.',
      },
      {
        href: '/services/assessments/decision-making-skills-assessment/',
        title: 'Decision-Making Skills Assessment',
        description: 'How you choose when the facts are incomplete, which matters in every business decision.',
      },
      {
        href: '/career-resources/skill-sampling-try-before-you-commit/',
        title: 'Skill Sampling: Try Before You Commit',
        description: 'A way to try a skill in small steps before you put time or money into it.',
      },
      {
        href: '/career-resources/side-income-while-employed-7-legit-options/',
        title: 'Side Income While Employed: 7 Legit Options',
        description: 'Seven ways to earn on the side, with what each one needs.',
      },
      {
        href: '/blog/freelancing-business/business-ideas-for-students/',
        title: 'Business Ideas for Students',
        description: 'Small business ideas that students can test while they study.',
      },
      {
        href: '/blog/skills/business-acumen-and-management-skills-india/',
        title: 'Business Acumen and Management Skills',
        description: 'The business and management skills that employers and founders look for.',
      },
    ],
    breadcrumbDescription: 'Free business quiz for college students that scores customers, pricing, cash, trust and teamwork, with a 14-day routine.',
    webAppDescription:
      'A free original 47-question business skills quiz for college students, with real situations and self-rating statements on customers and selling, pricing and profit, cash and costs, marketing and trust, and operations and teamwork, with five scores, stage-based advice, a 14-day routine and a downloadable report.',
    indexDescription:
      'Free business quiz for college students: situations and self-ratings on customers, pricing, cash, trust and teamwork, scored on judgement, not marks.',
    indexNote: 'Free, about 15 minutes, PDF report',
  },
  depth,
  extras,
  stageAdvice,
  scenarios,
  phrases,
  stagePlan,
  talk,
  talkTitles,
};
