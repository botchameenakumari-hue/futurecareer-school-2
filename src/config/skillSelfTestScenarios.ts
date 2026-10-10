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
      o('Agree to Science for now so there is no fight at home, and plan to raise design again after the first exam', 33, 'Keeping the peace buys time, but the real question stays unanswered and a first exam is a poor moment to reopen it. Pick a calm evening this week to share your reasons and ask for theirs.'),
      o('Tell them firmly that your mind is made up on design and you do not want to keep discussing it', 50, 'Being clear about your view is a good start, but a closed door rarely changes a parent\'s mind. Add two or three facts about what a design course studies and where it leads, and offer to answer their worries.'),
      o('Find out what design courses study and which streams they accept, then go through it with your family', 100, 'Shared facts move a family talk faster than opinions do. Some design routes accept students from more than one stream, so check the official page of each course, and write down every worry your family raises so you can answer them one by one.'),
      o('Ask a few relatives and teachers what they would choose and go with what most of them say', 17, 'Counting votes hands the decision to people who do not know your strengths. Write your own reasons first, then check them against facts about each route.'),
    ]),
    sc('options', 'You hear that a certain course has "great jobs". What do you do next?', [
      o('Decide soon, before the seats fill up, since so many others are going for it', 17, 'A crowd is not evidence of fit, and a popular course can also mean tougher competition. Spend a weekend finding out what the work actually is, who hires and what the entry rules are.'),
      o('Ask the person who told you what the job involves and how they got there', 50, 'That is a good first step because it starts from a real person. One view can be old or partial, so find one more source this month, such as an official site or someone else in that work.'),
      o('Check entry rules on the official site and talk to someone doing the job', 100, 'Rules, daily work and a real person\'s experience together tell you more than any headline. Write down three things you learned so you can set this course beside another.'),
      o('Treat it as an exaggeration and drop the idea without looking into it', 33, 'Doubt is healthy, but dropping the idea unchecked may close a real option. Give it one hour with official pages before you decide either way.'),
    ]),
    sc('process', 'Two options look equally good to you. What do you do?', [
      o('Wait a few more weeks, because one of them will start to feel clearly right', 17, 'The feeling of certainty often never arrives, and the waiting uses up the time you have. Choose three points that matter to you and score both routes today.'),
      o('Let a coin decide, and if you feel disappointed by how it lands, take the other one', 50, 'A coin can end a deadlock, and your reaction to it is real information. It still skips the checking that makes you comfortable afterwards, so compare first and flip only if your scores really tie.'),
      o('Score both on the three or four points that matter most to you and take the higher score', 67, 'Scoring replaces a vague feeling with something you can see, and it works well when the scores differ. If they come out close, let the option that is easier to undo win and put a review date on it.'),
      o('Choose the one that is easier to undo later, start on it, and put a review date on your calendar', 100, 'When two options are close, how easily you can change course matters more than which one is slightly better today. Write a review date a few months ahead, and check what your board and college allow so the way back is real.'),
    ]),
    sc('self', 'A teacher says you are very good at something you had not noticed. What do you do?', [
      o('Doubt it, because you have never felt that you are good at that', 17, 'Strengths you cannot see are common, because what comes easily to you feels ordinary. Treat the comment as something to test, not to dismiss.'),
      o('Feel happy about it and carry on as before, since you are not sure what to do with a comment like that', 33, 'A comment is a clue, and clues fade if they are not used. Do more of that task over the next two weeks and note whether you enjoy it as well as do it well.'),
      o('Decide that this must be your career and start planning around it', 50, 'Enthusiasm is good, but one comment is thin ground for a career. Use it as a lead and collect two or three more signs before planning around it.'),
      o('Note it, try more of that kind of work, and ask two or three others if they see it too', 100, 'Testing a strength through practice and other people\'s views turns a passing comment into reliable knowledge. Ask your two people this week and write down what each says.'),
    ]),
    sc('action', 'You have not explored any options yet and a deadline for choosing is getting close. What do you do first?', [
      o('Wait a little longer, since things may become clearer after the next test or result', 0, 'Time passing rarely brings clarity, but small actions do. Pick one route and read about it for thirty minutes today.'),
      o('Ask your friends what they are choosing and follow the group, so at least you will have company', 33, 'Friends are a good source of information, not of your answer. Ask what they know about their route, then check whether the same reasons fit you.'),
      o('Pick something tonight so the stress ends, and look into it properly afterwards', 33, 'Relief tonight can cost you later, because looking into it afterwards usually turns into defending the pick instead of testing it. A quick, structured look at two or three options is still possible before the deadline.'),
      o('Spend today reading about two or three routes and write what each needs and leads to', 100, 'A short page of facts on two or three routes gives you something real to decide on. Book one conversation with a teacher or senior for later this week to check what you wrote.'),
    ]),
    sc('pressure', 'Your friends are all choosing Commerce and you are unsure. What do you do?', [
      o('Join them, because studying alongside friends will make the first year easier', 17, 'A friendship can continue across streams, while a poor-fit stream is hard to leave. Ask yourself what you would choose if your friends were not in the picture.'),
      o('Stay away from Commerce on purpose so nobody can say you just followed your friends', 33, 'Choosing against the crowd is as reactive as following it. Judge the stream on fit, whichever way that points.'),
      o('Ask a few of them why they chose Commerce and which careers they have in mind, and see which reasons apply to you', 67, 'Their reasons are useful once tested against your own strengths. Do the same exercise for the stream you lean towards and set the two lists side by side.'),
      o('Judge the stream on your own strengths and goals, even if it means a different class from your friends', 100, 'Your own criteria are in charge here, and you accept that fit can matter more than staying together. Plan a weekly meeting or call with your friends so the choice does not cost the friendship.'),
    ]),
    sc('process', 'Your board results are not out yet and everyone around you is already deciding. What do you do?', [
      o('Decide now so the worry ends, and change the plan only if your marks turn out very different', 33, 'A decision made before marks arrive often has to be undone once the real eligibility is known. Short-list instead, and decide after results with the rules in front of you.'),
      o('Wait quietly until the results come, and use the time to rest after exams', 33, 'Rest is fair after exams, but the weeks before results are the cheapest time to explore. Set aside one hour on three days a week for reading about routes.'),
      o('Ask a teacher which routes students like you usually take, and short-list two or three from that', 67, 'Teachers know what students from your school usually do, which is useful but is one view. Add your own reading of the official page for each route on your list.'),
      o('Read about two or three routes now and plan how you will compare them after marks arrive', 100, 'You are using the waiting weeks to prepare a calm decision instead of making a rushed one. Write the points you will compare on, so you can fill in the marks as soon as they arrive.'),
    ], ['before']),
    sc('process', 'Your result is lower than you hoped. What do you do?', [
      o('Give up the plan you had and take whichever seat is easiest to get', 0, 'A lower result changes which routes are open, not your whole future. Spend one evening checking what your marks still allow before you settle for the easiest seat.'),
      o('Keep your original plan whatever the rules say, and try for it anyway', 33, 'Ambition is good, but a plan has to meet the real entry rules. Read the rules for your goal; if there is a gap, look for another way to the same goal, such as a repeat or improvement attempt where your board allows it, or a diploma with later entry into a degree where the rules allow.'),
      o('Take a week away from the topic to recover from the disappointment, and look at options once the first rush of admissions is over', 33, 'Recovering is fair, but admission dates keep moving while you rest. Set a date within a few days to look at options, and note the last date for each.'),
      o('Find out which routes are open at your marks and what chances to improve exist, then choose the best fit', 100, 'Looking at what is open and what lets you improve comes before choosing. List the routes open at your marks with their last dates, and pick by fit from that list.'),
    ], ['choosing']),
    sc('process', 'A few months into your stream you feel the choice may be wrong. What do you do?', [
      o('Switch to another stream straight away before more time is lost', 33, 'A quick switch can repeat the problem if the real cause is the study method or a hard first term. Review first, and switch only if the review points to a real mismatch and your board allows it.'),
      o('Say nothing and carry on, since changing now would upset everyone at home', 17, 'Doubts that are not spoken tend to grow, and the worry at home may be smaller than you fear. Pick one adult you trust, a teacher or a parent, and tell them this week.'),
      o('Ask a few friends and seniors what they would do in your place and follow the advice you hear most often', 50, 'Friends and seniors give useful perspective on how they felt in the same place. Add facts about your own marks and interest, and talk to someone who knows what your board allows.'),
      o('Check marks, interest and effort honestly, talk to a teacher, and try small changes first', 100, 'A review separates a hard start from a real mismatch, and small changes are cheaper to try. Choose a date such as your next big test, check the three signs then, and decide after that.'),
    ], ['chosen']),
    sc('options', 'Your child wants a route you do not know much about. What do you do?', [
      o('Say no for now because you do not know the route and cannot guide your child in it', 17, 'It is natural to hesitate about something unfamiliar, but unfamiliar does not mean unsuitable. Give it two evenings of reading with your child before you answer.'),
      o('Ask a relative who knows about it and go by what they say', 33, 'One relative\'s view may be partial or out of date. Treat it as a start and add the official board or institute page.'),
      o('Let your child decide alone, since you cannot guide them in a route you do not know', 50, 'Respecting independence is good, but your support with facts and questions is still useful. Offer to read the eligibility page together, then leave the decision with your child.'),
      o('Read the official pages together and speak to someone in that work', 100, 'Learning together gives both of you the same facts, and your child sees you taking the idea seriously. Aim to finish within two weeks and list the questions that remain.'),
    ], ['parent']),
    sc('pressure', 'A relative\'s child chose Science and is doing well, but your child prefers Commerce. What do you do?', [
      o('Point out how well the relative\'s child is doing and suggest your child think about Science too', 17, 'It is natural to notice how another family\'s child is doing, but the comparison can feel like pressure to your child. Replace it with a question about what your child likes in Commerce.'),
      o('Keep quiet to avoid pressuring your child, though you stay worried inside', 33, 'Not pushing is kind, but unspoken worry often shows in your tone. Say the worry once, in a calm voice, and then listen to the reasons.'),
      o('Tell your child the choice is theirs and stop discussing it, even if you still have doubts', 67, 'Giving freedom is good. Stay involved by asking how you can help the plan work, for example by finding the syllabus or a senior who studied Commerce.'),
      o('Look at your child\'s strengths, interests and goals and judge Commerce on those', 100, 'Fit and effort matter more than which stream someone else\'s child chose. Write down two strengths your child has with an example each, and ask how Commerce would use them.'),
    ], ['parent']),
    sc('self', 'Your child says "I do not know what I want". What do you do?', [
      o('Tell your child that time is running out and a decision is needed soon', 17, 'The worry is understandable, but a deadline said aloud usually produces a guess, not clarity. Offer two small activities to try this month instead.'),
      o('Choose a stream for them for now to take the pressure off, and say it can be reviewed after the first term', 33, 'You may ease the stress, but a choice made for them may not fit and they may not own it. Offer structure, such as a list of routes to explore, instead of a decision.'),
      o('Wait for your child to bring it up when ready, so they do not feel pushed', 50, 'Giving space is kind, but waiting can leave them alone with the worry. Start a light weekly chat, such as asking what was most interesting in school that week.'),
      o('Treat it as normal and arrange small trials, such as talking to people in different jobs', 100, 'Many students are unsure at this age, and small experiences give real information. Pick two to try in the next month and ask your child what they noticed afterwards.'),
    ], ['parent']),
  ],
  communication: [
    sc('listen', 'Someone is explaining a problem and you already know the answer. What do you do?', [
      o('Cut in as soon as you are sure what they will say, so the problem gets solved faster', 0, 'Cutting in feels efficient, but you may be solving a slightly different problem from the one they have. In your next three conversations, count to two after they stop before you speak.'),
      o('Stay quiet and polite while they talk, but use that time to prepare your reply in your head', 33, 'You are not interrupting, which is good, yet planning your reply means the last part of what they said is often lost. Next time, set the reply aside and listen for the one thing they care about most.'),
      o('Let them finish, then say the problem back in your own words before answering', 100, 'Saying the problem back lets them correct you in ten seconds instead of after you have acted on a wrong idea. Keep doing this, and try it first in your next two class or work discussions.'),
      o('Listen fully and then give your answer straight away, without repeating anything back', 67, 'Hearing everything is the harder half and you are doing it. The missing step is a one-sentence check such as "So the issue is...", which takes five seconds and catches wrong assumptions.'),
    ]),
    sc('speak', 'You are asked a question and you only half know the answer. What do you do?', [
      o('Answer confidently with what you know and fill the rest with what sounds reasonable, so you do not look unprepared', 0, 'A confident answer built on guesses costs you trust when it is found out. From now on, separate what you know from what you think, and say which is which.'),
      o('Say you are not sure about this one and will check and get back to them', 67, 'Admitting a gap beats bluffing, and promising to return shows responsibility. You can do better by first sharing the part you do know and naming a time when you will bring the rest.'),
      o('Give the part you do know, say plainly which part you do not, and name a time you will come back', 100, 'Honesty about limits makes the rest of what you say more believable. Put the promised time in your phone as soon as you say it, so the promise is kept.'),
      o('Give a long answer around the topic that covers every possibility, so that something in it is right', 33, 'A wide answer hides the gap and leaves the listener guessing what you meant. Try a two-sentence version this week: one sentence on what you know, one on what you will check.'),
    ]),
    sc('write', 'You need to ask someone senior for a favour by message. What do you write?', [
      o('A few lines about your situation and why you need help, with the request politely at the end', 33, 'Your politeness comes through, but a busy person may not reach the request at the bottom. Move the favour and the date you need it to the top, and keep the story short.'),
      o('Something short like "Sir, need your help, please call me" and explain everything on the call', 33, 'Short messages are easy to send but leave the other person guessing what you need and how long it will take. Add what, by when and a one-line reason so they can reply straight away.'),
      o('The request and the date in the first two lines, then a short reason and any details below', 100, 'With this layout the person can say yes or no after two lines. Use it again for your next three requests and see how quickly the replies come.'),
      o('Call them first because it feels more respectful, then send a short note with the details afterwards', 67, 'A call suits an urgent matter, and your written follow-up gives them something to act on later. Next time, try sending the note first when it is not urgent, so they can choose when to respond.'),
    ]),
    sc('feedback', 'Someone criticises your work in front of others. What do you do?', [
      o('Explain at once why the criticism is wrong, so others do not get a wrong impression of your work', 17, 'Defending on the spot usually turns a comment into an argument and hides what was useful in it. Next time, write their words down first and answer only after you have asked one question.'),
      o('Stay silent, accept it, and think about it for the rest of the day, perhaps avoiding that person', 33, 'Taking it quietly avoids a scene, but the feedback stays unused and the worry grows. Within a day, ask them for one example of what to change so the comment becomes a task.'),
      o('Thank them, ask what they would change first, and take any disagreement to them privately later', 100, 'Asking for the first change turns criticism into work you can do, and a private talk is the fair place to disagree. If the comment felt unfair, raise it within two days and bring one example.'),
      o('Say "you are right, I will fix it" to everything so that the moment passes quickly', 33, 'Agreeing quickly ends the discomfort but does not show you understood. Repeat what you will change in your own words so both of you are sure it is the same thing.'),
    ]),
    sc('present', 'You are asked to speak for two minutes with no notice. What do you do?', [
      o('Ask whether someone else can go first, so you get a few minutes to prepare', 67, 'Buying time is sensible when it is possible, and asking politely shows maturity. Practise for the times when you cannot wait: take ten seconds, pick one point and speak.'),
      o('Start with whatever comes to mind and trust that the right words will come as you go', 33, 'Some people manage this, but without a point a short talk tends to wander and end weakly. Next time, decide your one main point before the first word.'),
      o('Take a few seconds to pick one point, one example and a closing line, then speak slowly', 100, 'A simple structure carries you through unprepared moments. Practise it at home with random topics, such as your favourite festival, for one minute a day this week.'),
      o('Quickly search the topic on your phone and read out what you find so you sound well informed', 33, 'Reading helps with facts, but it breaks the connection with the people listening. Keep a few key words in front of you and look up between points.'),
    ]),
    sc('feedback', 'You disagree with a decision the group has made. What do you do?', [
      o('Go along with it in the meeting and then quietly do your part the way you think is right', 17, 'Doing it your own way breaks the group\'s plan and nobody knows why. Say your concern in the meeting, even in one sentence, so the group can respond.'),
      o('Keep arguing your point until others give in, since you are sure you are right', 33, 'Conviction matters, but pushing until others give up damages goodwill and people stop listening. Give your reason once, then ask what they think.'),
      o('Raise your concern in the meeting, with your reason and what you would do instead', 100, 'Speaking while the decision can still change gives the group a fair chance to respond. One concern, one reason and one alternative is enough; then listen, and accept the group\'s call if it stands.'),
      o('Agree for now, then message the group leader privately with your concern and a suggestion', 67, 'Raising it with the leader is a fair route and keeps the meeting smooth. It works better when the whole group can hear the concern, so try saying a short version aloud next time.'),
    ]),
    sc('speak', 'A teacher asks you to explain a topic to the class. What do you do?', [
      o('Say you have not prepared properly and ask if you can explain it in the next class', 33, 'Being honest is fine, but putting it off keeps the fear alive. Try a short version now: one main idea and one example, then ask the teacher to help.'),
      o('Read out the textbook definition carefully so that nothing you say is wrong', 33, 'A definition is safe, yet it does not show whether you understood it. Next time, close the book for a moment and explain the idea the way you would to a younger cousin.'),
      o('Explain the main idea in your own words with one example, and ask if it is clear', 100, 'An idea, an example and a check make your explanation easy to follow. Try this with one topic from every subject this week, using a friend as your audience.'),
      o('Cover every point of the chapter in detail so the teacher sees you know the whole topic', 17, 'Covering everything loses the class after the first few minutes and hides what you actually understood. Pick the one idea that matters most, give one example and stop.'),
    ], ['school']),
    sc('feedback', 'A group project member is not replying to messages. What do you do?', [
      o('Post in the class group that this person is not cooperating, so everyone knows where the delay is coming from', 0, 'A public message turns a late reply into a quarrel before the person has had a chance to explain. Speak to them directly first, and involve others only with facts.'),
      o('Finish their part quietly so the project is not delayed, and say nothing to them', 33, 'The project moves, but the real problem stays hidden and you may feel resentful. Tell the person what you did and ask them to take the next part.'),
      o('Message them the exact task and date today, and if there is still no reply by then, tell the group and the faculty plainly', 100, 'A specific task and date is easy to answer and easy to point to later, and telling the faculty with facts is fair, not tale-telling. Send the message today and decide now what you will do when the date passes.'),
      o('Send a friendly reminder and ask whether they need any help with the task', 67, 'A kind reminder works for many people. Add the exact task and the date, and decide what you will do if there is still no reply by then.'),
    ], ['college']),
    sc('present', 'In an interview you are asked about a weakness you did not expect. What do you do?', [
      o('Say you are a perfectionist and work too hard, as many candidates do', 17, 'This answer is so common that interviewers often hear it as dodging the question. Choose a real, work-related habit you are improving.'),
      o('Pick a small, safe weakness that has nothing to do with the job, such as not being good at drawing', 33, 'It is honest but gives the interviewer nothing to assess. Choose a real weakness that is connected to work and that you are actively working on.'),
      o('Name a real weakness, say what you are doing about it, and give one example', 100, 'Honesty with a plan to improve is respected. Write your answer in three sentences and practise it aloud twice this week.'),
      o('Pause, then mention a skill you are still learning, such as a software tool, and say you are practising it', 67, 'This is a safe and honest choice, and the pause helps. To make it stronger, add one example of what you did last month to improve it.'),
    ], ['fresher']),
    sc('feedback', 'A client or senior asks for a deadline you cannot meet. What do you do?', [
      o('Agree to the date so the client is happy, and plan to work extra hours to catch up', 0, 'Missing a date you accepted costs more trust than negotiating it at the start. Next time, check your work before answering and do not accept a date you doubt.'),
      o('Say the date is not possible and leave it there, since you cannot promise something untrue', 33, 'You are honest, but the other person is left with a problem and no options. Add another date or a smaller delivery so they can decide.'),
      o('Explain the constraint, say what it affects, and offer another date or a smaller scope', 100, 'You protect quality and the relationship together. Write the constraint and your alternative in two lines before the next conversation so you stay calm.'),
      o('Ask for a short time to check with your team, then reply the same day with a clear answer', 67, 'Taking a few hours to check is reasonable and replying the same day keeps trust. Come back with the constraint and an alternative, not just a yes or no.'),
    ], ['professional']),
  ],
  'soft-skills': [
    sc('lead', 'Your group is stuck with no plan and nobody speaks. What do you do?', [
      o('Ask everyone to write one idea on a slip of paper, then read them out and see which the group likes', 67, 'Written ideas let quiet members be heard, which is a real strength. It stops short of a plan, so after reading them out, name the pick and give two or three people a first task with a date.'),
      o('Suggest a simple plan, say who could do which part, and ask if it works', 100, 'Giving the group something to react to is what leading means here. Next time, state the goal in one sentence before your plan, so people can disagree with the plan and not with you.'),
      o('Decide the plan yourself and give each person a task, so the meeting time is not wasted', 33, 'Speed helps when time is short, but tasks handed down without asking are often done half-heartedly. Spend two minutes asking what each person is good at, then assign.'),
      o('Ask the teacher or senior to tell the group what is expected, since they know best', 33, 'Checking what is expected is sensible, but do it after you have proposed something. Ask "is this the right direction?" instead of "what should we do?".'),
    ]),
    sc('team', 'A teammate is not doing their part. What do you do?', [
      o('Do their part yourself so the work is submitted on time and the group does not lose marks', 33, 'Rescuing the work protects the result this once, yet the teammate learns nothing and you carry the extra load again. Speak to them within a day or two of submitting.'),
      o('Post a general reminder in the group chat that everyone\'s parts are due on Friday', 67, 'General reminders avoid embarrassing anyone, but the person may not realise it is about them. If nothing changes in a day, message or speak to them directly.'),
      o('Talk to them privately and soon, ask what is blocking them, and agree on tasks and dates', 100, 'Many gaps come from unclear tasks, a heavy week or a personal problem, and a private chat brings these out. Write the agreed tasks and dates in the group notes so nobody has to remember them.'),
      o('Wait and see, because people often start late and still finish in time', 0, 'Waiting works only if you know this person starts late and still delivers. Check in at the halfway point at the latest, while there is time left to share the work.'),
    ]),
    sc('adapt', 'A plan you worked on is cancelled at the last moment. What do you do?', [
      o('Ask your manager or teacher to reconsider, explaining how much work has already gone into it', 33, 'One conversation with reasons is fair, since decisions sometimes rest on missing facts. Stop after one clear answer and use the saved energy on the new plan.'),
      o('Note what you learned, ask what the new priority is, and adjust your work to it', 100, 'Keeping the learning and asking about priorities shows you can move on without bitterness. Send a two-line note listing what the cancelled work produced, in case it helps later.'),
      o('Take a short break to cool down, then ask what the new priority is and restart from there', 67, 'Pausing briefly is healthy and asking about the new priority is the right move. Before restarting, save the useful pieces of the cancelled work in one folder.'),
      o('Keep working on the old plan in your free time, in case it is brought back', 0, 'Hoping the plan returns leaves you stuck between two tasks. Write a short note of what is done so far, close it, and give the new priority your full working hours.'),
    ]),
    sc('own', 'You realise you will miss a deadline. What do you do?', [
      o('Work extra hours to try to finish, and tell the person only if it still cannot be done', 33, 'Extra effort is admirable, but someone may be planning around your date. Message them the day you first doubt it, even while you are still trying.'),
      o('Tell the person early, give a new date and share what you can deliver now', 100, 'Early notice with a date and a partial delivery lets others re-plan. Make it a habit: the day you take a task, note the date by which you would know if it is at risk.'),
      o('Send a message on the due date saying it will be late, with the reason and a new date', 67, 'You did tell them and gave a date, which beats silence. The gap is timing, as a day or two earlier would have let them adjust, so set a mid-point check on your own calendar.'),
      o('Send the unfinished work as it is and fix the rest later, without mentioning what is missing', 0, 'Sending unfinished work without saying so is found out later and costs trust. If you must send part of it, label it as partial and write when the rest will come.'),
    ]),
    sc('solve', 'A task comes with no instructions. What do you do?', [
      o('Start straight away with your best guess and show your first draft to the person within a day or two', 67, 'Starting early and showing a draft limits wasted effort. Add a five-minute step first: write what done looks like in two lines and send it for a yes or no.'),
      o('Write two lines on what you think done looks like, send them to the person, and start on the first part while you wait', 100, 'Sending your own version turns a long explanation into a quick yes or no, and starting meanwhile saves time. If the answer is no, you have lost an hour, not a week. Repeat this for every unclear task.'),
      o('Ask a colleague who did a similar task to share their old file, and follow the same approach', 33, 'Reusing an old file saves time and is common practice. Check what is different about your task first, or you may copy a method that solves another problem.'),
      o('Ask the person who gave the task to explain it fully before you do anything', 33, 'Asking is not wrong, and some tasks truly need it. Go with your own two-line version of the task, so the answer is a quick correction instead of a long explanation.'),
    ]),
    sc('team', 'Two teammates are in conflict and it is slowing the work. What do you do?', [
      o('Stay out of it and let them settle it, since taking sides could hurt your friendship with both', 33, 'Staying neutral protects your friendships, but the conflict keeps costing the team time. Offer one small neutral step, such as a short talk with each person about what the task needs.'),
      o('Take it to the team lead or teacher straight away so that someone with authority can handle it', 67, 'Escalation is right when there is harassment or real harm. For ordinary disagreement try one neutral conversation first, and tell the lead afterwards if it did not help.'),
      o('Listen to each separately, keep the talk on the task, and help them agree on one next step', 100, 'Hearing both sides separately and returning to the task lowers the heat. Finish by writing the one next step and its owner on the group page.'),
      o('Back the one you think is right, so the group knows what behaviour is acceptable', 0, 'Backing one side feels fair when you are sure who is right, but the other person will read it as picking a team. Share what you see about the work, and ask both for the facts.'),
    ]),
    sc('own', 'You have several assignments and a test due in the same week. What do you do?', [
      o('Start with the biggest assignment since it will take longest, and fit the others around it', 33, 'The longest task deserves early time, but starting there alone ignores the test date. Add a date for every item, then see what really must be done first.'),
      o('List everything with dates and effort, order by deadline and weight, and block time for each', 100, 'Visible plans reduce stress because nothing is held in memory. Do this in ten minutes tonight and cross items off so you can see progress.'),
      o('Ask each teacher which task counts most for marks and put most of your time into that one', 67, 'Knowing what carries marks is useful information. Use it as one input to a full list, so the smaller tasks are not left to the last night.'),
      o('Ask for extensions on the assignments so you can give full attention to the test', 17, 'An extension can help in a real clash, but teachers grant it rarely and planning often removes the need. Make the list first, then ask only for the one item that truly cannot fit.'),
    ], ['school']),
    sc('lead', 'You are made leader of a project team of friends. What do you do first?', [
      o('Keep things relaxed because they are your friends, and step in only if something starts going wrong', 33, 'Friendship helps, yet unspoken roles are a usual cause of quarrels in friend groups. Keep the warm tone and still agree who does what by when.'),
      o('Set the goal, roles and dates together at the start and agree how you will check progress', 100, 'Starting with a shared goal, roles and dates makes later reminders feel fair, not bossy. Put it in the group chat in four lines so everyone can refer back to it.'),
      o('Ask each friend which part they want, then trust them to finish it without checking in', 67, 'Letting people choose builds ownership. Add one mid-point check with a date, so a problem shows up while there is still time.'),
      o('Do the hardest parts yourself so the group\'s marks are safe, and give the easier parts to the others', 33, 'Taking the risk yourself protects the result this time, but it overloads you and tells others they are not trusted. Give one difficult part to a willing friend and help if they get stuck.'),
    ], ['college']),
    sc('own', 'You made a mistake that affects a colleague\'s work. What do you do?', [
      o('Fix it fully first and then tell your colleague it is sorted, so they do not worry', 67, 'Fixing quickly is good, but your colleague may be using the wrong data in the meantime. Tell them first, even in one line, then fix.'),
      o('Tell them at once, fix it, and say what you will do to stop it happening again', 100, 'Prompt, open ownership is how a fresher earns trust quickly. After fixing, add one check to your own routine so the same mistake does not come back.'),
      o('Mention it casually in a conversation later so it does not look like a big deal', 33, 'Playing it down may leave the person without the facts they need. Send a clear message that says what happened and what has changed.'),
      o('Tell your manager only, because the manager can decide who else needs to know', 17, 'Informing the manager is not wrong, but the person affected should hear it from you. Speak to them first, and then tell the manager as well.'),
    ], ['fresher']),
    sc('adapt', 'Your manager gives you a new responsibility with no extra time. What do you do?', [
      o('Accept it with enthusiasm and work longer hours for the first few weeks to show you can cope', 33, 'Eagerness is noticed, but longer hours hide the trade-off and cannot last. Tell your manager what the first month will cost in other work, in hours.'),
      o('Ask what can move or stop, agree on priorities and a review point, then take it on', 100, 'You protect quality and show you can handle growth. Fix a review date within a few weeks and bring a short list of what moved and what it cost.'),
      o('Say yes, then send your manager a list of your current tasks and ask which one to drop', 67, 'This is close, since it makes the trade-off visible. Add a review date, so the decision is not left standing for months.'),
      o('Decline politely, explaining that your present work needs your full time to stay at its quality', 33, 'Refusing can be right when you are truly full, but it leaves your manager without options. Offer one alternative, such as a later start or a smaller part of the task.'),
    ], ['professional']),
  ],
};
