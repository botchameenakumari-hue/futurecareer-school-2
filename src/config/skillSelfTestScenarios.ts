// Real-life situation questions for the self-rating tests. Each answer option
// has a score (0-100) that feeds the area score and a piece of advice shown in
// the result for the option the person chose. General guidance only.
import type { SkillTestId } from './skillSelfTests';

export type ScenarioOption = { t: string; s: number; a: string };
export type Scenario = { d: string; text: string; stages?: string[]; opts: ScenarioOption[] };

const o = (t: string, s: number, a: string): ScenarioOption => ({ t, s, a });
const sc = (d: string, text: string, opts: ScenarioOption[], stages?: string[]): Scenario =>
  stages ? { d, text, opts, stages } : { d, text, opts };

export const SCENARIOS: Record<SkillTestId, Scenario[]> = {
  'confused-after-10th': [
    sc('pressure', 'Your family strongly wants you to take Science, but you are more interested in design. What do you do?', [
      o('Agree to avoid an argument and decide to think about it later', 33, 'Avoiding the talk keeps the peace for now but leaves the real question unanswered. Choose a calm time to share your reasons and ask for theirs.'),
      o('Tell them clearly that you will take design and refuse to discuss it further', 67, 'A clear view is a good start, but a closed conversation rarely changes minds. Add facts about what a design route involves, what it leads to and how you would manage the risks.'),
      o('Collect facts on both routes, including where a design path leads, and ask them to go through the facts with you', 100, 'This is the strongest approach. Shared facts move a family conversation faster than opinions, and it shows you have thought it through.'),
      o('Ask them what they think and go with whoever sounds most convincing', 0, 'Deciding by who argues best means the decision is made by persuasion, not by fit. Write down your own reasons first and check them against facts.'),
    ]),
    sc('options', 'You hear that a certain course has "great jobs". What do you do next?', [
      o('Join it quickly because many people are choosing it', 0, 'Popularity is not a reason by itself. Many people choosing the same route can mean more competition. Find out what the work is and who hires.'),
      o('Ask the person who told you what the job actually involves', 67, 'A good first step. Add a second source, because one person\'s view can be incomplete or out of date.'),
      o('Check the entry rules and what the work involves from official or institute sources, and speak to someone doing the job', 100, 'Strong. Rules, work content and a real person\'s experience together give you what a headline cannot.'),
      o('Ignore it because it sounds too good to be true', 33, 'Doubt is healthy, but ignoring it completely can close a real option. Check it quickly from reliable sources and then decide.'),
    ]),
    sc('process', 'Two options look equally good to you. What do you do?', [
      o('Wait until one of them feels perfect', 0, 'Waiting for a perfect feeling can last forever. Choose points to compare, score both, and decide on that.'),
      o('Toss a coin', 33, 'It can break a deadlock, but it skips the thinking that makes you comfortable with the result. Compare first, and use the coin only if the scores really tie.'),
      o('Ask many more people and follow the majority', 67, 'Other views help, but the majority may not know your situation. Ask a few people who know both routes, then compare on your own points.'),
      o('Compare them on the same four points, pick the one that is good enough and easier to change later, and set a review date', 100, 'This is the strongest approach. Same points, a reversible choice and a review date turn a stuck decision into a managed one.'),
    ]),
    sc('self', 'A teacher says you are very good at something you had not noticed. What do you do?', [
      o('Dismiss it, because you do not see it yourself', 0, 'Other people often see strengths we overlook. Treat the comment as data worth testing.'),
      o('Feel pleased and carry on as before', 33, 'The comment is a clue. Test it by doing more of that task and noting how it feels and how you perform.'),
      o('Decide immediately that this is your career', 33, 'One comment is too little to build a career on. Use it as a lead and gather more evidence.'),
      o('Note it, do more of that kind of task, and ask a few others whether they see it too', 100, 'Strong. Testing a strength with practice and with other people\'s views is how you turn a comment into reliable knowledge.'),
    ]),
    sc('action', 'You have not explored any options yet and a deadline for choosing is getting close. What do you do first?', [
      o('Wait and hope it becomes clear', 0, 'Time passing rarely brings clarity on its own. Small actions do. Start with one.'),
      o('Ask friends what they are choosing and do the same', 33, 'Friends are a useful source of information, not of your answer. Use their experience as one input.'),
      o('Pick something tonight to end the stress', 33, 'Relief now can cost you later. A quick, structured look at two or three options is still possible and better.'),
      o('Read up on two or three routes today and list what each needs and leads to', 100, 'Strong. A short list of facts for two or three routes gives you something real to decide on.'),
    ]),
    sc('pressure', 'Your friends are all choosing Commerce and you are unsure. What do you do?', [
      o('Join them so that you stay together', 0, 'Friendship can continue across different streams. A choice that suits your friends may not suit you.'),
      o('Ask them why they chose it and see whether those reasons apply to you', 67, 'Good. Their reasons are useful when you test them against your own strengths and goals.'),
      o('Check whether the route fits your strengths and goals, and stay open to a different choice even if it means a different school', 100, 'Strong. You use your own criteria and accept that fit may matter more than staying together.'),
      o('Refuse Commerce just to be different', 33, 'Choosing against the crowd is as reactive as following it. Judge the route on fit, not on the crowd.'),
    ]),
    sc('process', 'Your board results are not out yet and everyone around you is already deciding. What do you do?', [
      o('Decide now so that you stop worrying', 33, 'A decision without your marks and facts can need undoing later. Short-list instead.'),
      o('Wait quietly until the results come', 33, 'Waiting is fine, but the time before results is useful for exploring.'),
      o('Ask a teacher which routes are common for students like you, then short-list two or three to compare once results are out', 67, 'Good. Add your own reading so the list is based on more than one view.'),
      o('Short-list two or three routes, read what each involves, and plan how you will compare them when your marks arrive', 100, 'Strong. You use the waiting time to prepare a calm, fact-based decision.'),
    ], ['before']),
    sc('process', 'Your result is lower than you hoped. What do you do?', [
      o('Drop your plans and take whatever is easiest', 0, 'A lower result changes the routes available, not your whole future. Check what is still open.'),
      o('Blame the result and avoid the topic for a while', 33, 'Taking a break is fine, but the admission steps keep moving. Set a date to look at options.'),
      o('Check which routes are open at your marks and what improvement options exist, then pick the best fit among them', 100, 'Strong. You look at what is open, and which options let you improve, and choose on fit.'),
      o('Insist on your original plan whatever the rules say', 33, 'Ambition is good, but a plan must meet the real entry rules. Learn them, then build a path to your goal.'),
    ], ['choosing']),
    sc('process', 'A few months into your stream you feel the choice may be wrong. What do you do?', [
      o('Switch immediately to something else', 33, 'A quick switch can repeat the problem. Review first.'),
      o('Say nothing and carry on unhappily', 0, 'Unspoken doubts grow. Talk to someone who can help you review it.'),
      o('Review marks, interest and effort honestly, talk to a teacher, and try small changes before a big one', 100, 'Strong. A structured review shows whether the problem is the choice, the method or the phase you are in.'),
      o('Ask friends what they would do', 67, 'Friends help with perspective. Add facts about your own marks and interest, and someone who knows your options.'),
    ], ['chosen']),
    sc('options', 'Your child wants a route you do not know much about. What do you do?', [
      o('Say no because it is unfamiliar', 0, 'Unfamiliar is not the same as unsuitable. Refusing without facts can damage trust.'),
      o('Ask a relative who knows about it', 33, 'One relative\'s view may be incomplete. Add official sources.'),
      o('Learn about it together from official sources and speak to someone who works in the field', 100, 'Strong. Learning together builds trust and gives both of you the same facts.'),
      o('Let them decide alone since you do not know it', 67, 'Respecting independence is good, but your support with facts and questions still helps.'),
    ], ['parent']),
    sc('pressure', 'A relative\'s child chose Science and is doing well, but your child prefers Commerce. What do you do?', [
      o('Push your child to match the relative\'s child', 0, 'Comparing children rarely helps. Success depends on fit and effort.'),
      o('Say nothing but feel worried', 33, 'Unspoken worry can show up as pressure. Share your worry and listen to your child\'s reasons.'),
      o('Look at your child\'s own strengths, interests and goals, and judge the route on those', 100, 'Strong. Fit and effort matter more than which stream someone else chose.'),
      o('Let your child choose and stop discussing it', 67, 'Giving freedom is good. Stay involved by asking how you can support the plan.'),
    ], ['parent']),
    sc('self', 'Your child says "I do not know what I want". What do you do?', [
      o('Tell them they must decide soon', 0, 'Pressure rarely produces clarity. Small explorations do.'),
      o('Choose for them to help', 33, 'You may relieve stress now, but the choice may not fit. Offer structure instead of a decision.'),
      o('Treat it as normal, and set up small explorations such as talking to people in different jobs, short activities or reading', 100, 'Strong. Many students are unsure, and small experiences give them real information.'),
      o('Wait until they bring it up', 33, 'Waiting can leave them alone with the worry. Start a light, regular conversation.'),
    ], ['parent']),
  ],
  communication: [
    sc('listen', 'Someone is explaining a problem and you already know the answer. What do you do?', [
      o('Interrupt and give the answer to save time', 0, 'Interrupting can make the other person feel unheard and can mean you answer the wrong problem. Let them finish.'),
      o('Wait politely but think about your reply while they talk', 33, 'You avoid interrupting, but you may miss details. Listen for what is not said as well.'),
      o('Let them finish, repeat the problem back in your own words, then give your answer', 100, 'Strong. Repeating back confirms you understood and builds trust.'),
      o('Nod and let them talk without replying', 33, 'Silence can look like disinterest. Show you have heard by responding.'),
    ]),
    sc('speak', 'You are asked a question and you only half know the answer. What do you do?', [
      o('Guess confidently', 0, 'A wrong, confident answer costs trust. Say what you know and what you do not.'),
      o('Say nothing', 33, 'Silence leaves the question open. Share what you know and offer to find out the rest.'),
      o('Say what you know, say clearly what you do not, and offer to find out', 100, 'Strong. Honesty about limits makes the rest of what you say more believable.'),
      o('Give a long answer around the topic', 33, 'A long answer hides the gap. Be brief and direct.'),
    ]),
    sc('write', 'You need to ask someone senior for a favour by message. What do you write?', [
      o('A long background first, then the request at the end', 33, 'Put the request first. A busy reader may not reach the end.'),
      o('A very short message such as "Please help"', 33, 'Too short means the reader has to ask what you need. Include the what and the by when.'),
      o('The request and a deadline in the first lines, with a short reason and any details after', 100, 'Strong. The reader can say yes or no after two lines.'),
      o('Call them instead of writing anything', 67, 'A call is fine when it is urgent, but a written note lets them act later. Follow up in writing.'),
    ]),
    sc('feedback', 'Someone criticises your work in front of others. What do you do?', [
      o('Defend your work immediately', 0, 'Immediate defence usually escalates. Listen first.'),
      o('Go quiet and feel upset for the rest of the day', 33, 'Withdrawing leaves the feedback unused. Take a short breath and respond.'),
      o('Stay calm, thank the person, ask for specifics and follow up privately if needed', 100, 'Strong. Specifics turn criticism into something you can act on.'),
      o('Agree with everything to end the conversation quickly', 33, 'Agreeing without understanding does not help either of you. Ask what exactly should change.'),
    ]),
    sc('present', 'You are asked to speak for two minutes with no notice. What do you do?', [
      o('Refuse because you are not ready', 0, 'Refusing every time keeps the fear alive. A short structure makes it possible.'),
      o('Start speaking and see where it goes', 33, 'Without a point, short talks wander. Choose one point first.'),
      o('Pick one main point, one example and a closing line, then speak slowly', 100, 'Strong. A simple structure carries you through unprepared moments.'),
      o('Read from your phone', 33, 'Notes help, but reading removes connection. Use a few key words only.'),
    ]),
    sc('feedback', 'You disagree with a decision the group has made. What do you do?', [
      o('Stay silent and complain later', 0, 'Complaining later does not change the decision and hurts trust. Speak while it can matter.'),
      o('Argue strongly until others agree', 33, 'Strong views matter, but forcing the point damages the relationship.'),
      o('Say you see the aim, give one specific concern and suggest an alternative', 100, 'Strong. You show respect, name a reason and offer a way forward.'),
      o('Accept it and say you do not mind', 33, 'If it matters to you, say so. You can still go along with the decision afterwards.'),
    ]),
    sc('speak', 'A teacher asks you to explain a topic to the class. What do you do?', [
      o('Say you are not ready', 33, 'A short attempt is better. Try one point and one example.'),
      o('Read the textbook definition', 33, 'Reading helps, but your own words show you understand.'),
      o('Explain the main idea in your own words with one example, and ask if it is clear', 100, 'Strong. A simple idea, an example and a check build understanding.'),
      o('Speak quickly to finish soon', 0, 'Speed hides content. Slow down and give the listener time.'),
    ], ['school']),
    sc('feedback', 'A group project member is not replying to messages. What do you do?', [
      o('Complain to everyone about them', 0, 'Complaining spreads tension. Speak to the person first.'),
      o('Do their part yourself without saying anything', 33, 'It gets the work done but hides the problem and builds resentment.'),
      o('Message clearly with the task and date, and if there is no reply, speak to them in person or involve the group calmly', 100, 'Strong. Clear and kind follow-up solves most of these problems.'),
      o('Wait and hope they respond', 33, 'Waiting can leave you without time. Follow up early.'),
    ], ['college']),
    sc('present', 'In an interview you are asked about a weakness you did not expect. What do you do?', [
      o('Deny having any weakness', 0, 'Interviewers do not believe it. Show self-awareness.'),
      o('Freeze and say you cannot think of anything', 33, 'Prepare one honest example in advance.'),
      o('Name a real weakness, show what you are doing to improve it and give a small example', 100, 'Strong. Honesty with a plan to improve is respected.'),
      o('Pick a fake weakness like "I work too hard"', 33, 'Interviewers have heard it often. Choose a real one.'),
    ], ['fresher']),
    sc('feedback', 'A client or senior asks for a deadline you cannot meet. What do you do?', [
      o('Say yes and hope to manage', 0, 'Missing a deadline you accepted costs more trust than negotiating it.'),
      o('Say no without explanation', 33, 'A plain no leaves them without options. Offer one.'),
      o('Explain the constraint, show the impact and offer an alternative date or smaller scope', 100, 'Strong. You protect quality and the relationship.'),
      o('Delay replying until you decide', 33, 'Silence makes planning harder for them. Reply promptly.'),
    ], ['professional']),
  ],
  'soft-skills': [
    sc('lead', 'Your group is stuck with no plan and nobody speaks. What do you do?', [
      o('Wait for someone else to start', 0, 'If you wait, nothing may happen. Offering a simple start is a leadership act.'),
      o('Take over and tell everyone what to do', 33, 'Taking charge helps, but ordering without agreement can cause resistance. Ask for input.'),
      o('Propose a simple plan, suggest who does what, and check that everyone agrees', 100, 'Strong. A plan, roles and agreement together move a group.'),
      o('Complain that the group is not organised', 0, 'Complaining does not solve it. Offer one concrete step.'),
    ]),
    sc('team', 'A teammate is not doing their part. What do you do?', [
      o('Do it yourself without saying anything', 33, 'It solves the task but not the pattern, and you may burn out.'),
      o('Tell the whole group about it', 33, 'Public blame rarely helps. Start in private.'),
      o('Talk privately and early, ask what is blocking them, and agree on specific tasks and dates', 100, 'Strong. Many problems are about unclear tasks, workload or personal issues, which a private talk reveals.'),
      o('Ignore it and hope it improves', 0, 'Problems that are ignored usually grow.'),
    ]),
    sc('adapt', 'A plan you worked on is cancelled at the last moment. What do you do?', [
      o('Feel angry for a long time and stop caring', 0, 'Feeling upset is natural, but staying there costs you. Move to what is next.'),
      o('Argue to bring the plan back', 33, 'Asking about the reasons is fine, but fighting the decision wastes energy.'),
      o('Note what you learned, ask what the new priority is, and adjust your work accordingly', 100, 'Strong. You keep the learning and move forward.'),
      o('Wait to be told what to do next', 33, 'Waiting delays you. Ask what the new priority is.'),
    ]),
    sc('own', 'You realise you will miss a deadline. What do you do?', [
      o('Say nothing and hope nobody notices', 0, 'Surprises are worse than early warnings.'),
      o('Work quietly and deliver late', 33, 'The work may be good, but others cannot plan around it.'),
      o('Tell the person early, give a new date and share what you can deliver now', 100, 'Strong. Early notice and a partial delivery protect trust.'),
      o('Offer excuses once the deadline has passed', 0, 'Excuses after the fact do not rebuild trust. Communicate before.'),
    ]),
    sc('solve', 'A task comes with no instructions. What do you do?', [
      o('Wait until someone explains it', 0, 'Waiting makes you dependent. Take a first step.'),
      o('Start working immediately in the way you think best', 33, 'Starting is good, but without a clear goal you may build the wrong thing.'),
      o('Clarify what done looks like, break it into parts, start with the first, and check in early', 100, 'Strong. A clear goal, small parts and an early check prevent most wasted effort.'),
      o('Ask someone to do it for you', 0, 'Asking for help is fine, but come with what you tried.'),
    ]),
    sc('team', 'Two teammates are in conflict and it is slowing the work. What do you do?', [
      o('Take a side', 0, 'Taking sides makes conflict worse.'),
      o('Stay away from it', 33, 'Avoiding it leaves the work stuck.'),
      o('Listen to both separately, keep the focus on the task, and help them agree on one next step', 100, 'Strong. Neutral listening and a task focus often unlock progress.'),
      o('Tell a senior immediately', 67, 'Escalation can be right, but try a direct and neutral conversation first.'),
    ]),
    sc('own', 'You have several assignments and a test due in the same week. What do you do?', [
      o('Do whatever feels urgent in the moment', 33, 'Reactive work drops important things. Plan first.'),
      o('Start with the one you like best', 0, 'Preference is not priority.'),
      o('List everything with dates and effort, order by deadline and weight, and block time for each', 100, 'Strong. A visible plan reduces stress.'),
      o('Ask for extensions on all of them', 33, 'An extension can help in a real clash, but planning usually removes the need.'),
    ], ['school']),
    sc('lead', 'You are made leader of a project team of friends. What do you do first?', [
      o('Do most of the work yourself to be safe', 33, 'Leaders share the work. Delegate clearly.'),
      o('Keep things informal and see what happens', 33, 'Friends still need clear roles and dates.'),
      o('Set the goal, roles and dates together at the start and agree how you will check progress', 100, 'Strong. A clear start prevents most friction.'),
      o('Give orders to show you are in charge', 0, 'Orders without agreement rarely work with peers.'),
    ], ['college']),
    sc('own', 'You made a mistake that affects a colleague\'s work. What do you do?', [
      o('Hope they do not notice', 0, 'Mistakes found by others damage trust more than ones you report.'),
      o('Fix it quietly without telling them', 33, 'The fix helps, but they may be working with wrong information. Tell them.'),
      o('Tell them promptly, explain the impact, fix it and say how you will prevent it again', 100, 'Strong. Prompt ownership builds trust quickly.'),
      o('Blame circumstances', 0, 'Explaining is fine, but blaming avoids the lesson.'),
    ], ['fresher']),
    sc('adapt', 'Your manager gives you a new responsibility with no extra time. What do you do?', [
      o('Accept silently and work longer hours', 33, 'Working longer is not sustainable and hides the trade-off.'),
      o('Refuse the responsibility', 33, 'A flat refusal may be needed sometimes, but it is better to discuss options first.'),
      o('Ask what can move or stop, agree on priorities and a review point, then take it on', 100, 'Strong. You protect quality and show you can handle growth.'),
      o('Ignore it until someone asks', 0, 'Ignoring tasks costs credibility.'),
    ], ['professional']),
  ],
};
