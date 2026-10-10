// Round 3 situation questions for areas that had too few. Same shape as
// skillSelfTestScenarios.ts. General guidance only.
import type { SkillTestId } from './skillSelfTests';
import type { Scenario, ScenarioOption } from './skillSelfTestScenarios';

const o = (t: string, s: number, a: string): ScenarioOption => ({ t, s, a });
const sc = (d: string, text: string, opts: ScenarioOption[]): Scenario => ({ d, text, opts });

export const SCENARIOS_MORE: Record<SkillTestId, Scenario[]> = {
  'confused-after-10th': [
    sc('self', 'You are asked "What are you good at?" and you cannot think of an answer. What do you do?', [
      o('Say "nothing special" and move on, because you do not like talking about yourself', 17, 'Most people struggle to answer this on the spot, but moving on leaves the question open. For a week, note tasks people ask you to help with and things you finish without being pushed.'),
      o('Name your highest-scoring subject, since marks are the most solid proof you have', 50, 'Marks are one clue, but they do not show what you enjoy or how you work. Add one thing you did in that subject that you liked, and what others say about your work.'),
      o('Name something that sounds impressive, such as coding or leadership, even though you have not tried it much', 33, 'An answer chosen to impress tells you nothing about yourself. Write your own answer privately first, based on things you have actually done.'),
      o('Say you are not sure yet and name two things you plan to try to find out', 100, 'Naming what you will test is more useful than guessing. Choose one of the two things and try it this month, then note what you liked and disliked.'),
    ]),
    sc('options', 'A relative says "Only this course is worth doing now". What do you do?', [
      o('Accept it because they have more experience of life than you do', 17, 'Experience helps, but the field may have changed since they last looked. Treat their view as one source and compare it with a current official page.'),
      o('Thank them, then check the course on official pages and compare it with other routes', 100, 'You respect the person and still build your own picture from current facts. Spend an hour on the course page and two other routes, then tell the relative what you found.'),
      o('Tell them that things work differently today and that you will decide for yourself', 33, 'Arguing rarely changes the view and can cost goodwill. Ask what they know about the course and offer one fact that adds to it.'),
      o('Say nothing and decide later, to avoid a debate in front of the whole family', 50, 'Avoiding a debate at a gathering is sensible, but the claim stays unchecked. Later that week, spend an hour on official pages for this course and two other routes.'),
    ]),
    sc('action', 'You have a list of options but have not spoken to anyone about them. What is your next step?', [
      o('Keep reading about the options online until you feel ready to talk to someone', 33, 'Reading helps, but it can quietly become a way of delaying. Give it a limit, such as three more evenings, and then book one conversation.'),
      o('Ask a teacher or counsellor three specific questions and fix a time to meet', 100, 'Specific questions with a time fixed turn a list into progress. Write the three questions tonight and ask one person this week.'),
      o('Wait until the exam results narrow your list, then talk to someone', 17, 'Waiting wastes the weeks you could use to narrow the options, so results only confirm a choice. Talk to one person now and treat marks as one input among others.'),
      o('Pick the one that sounds best and stop looking, so you can focus on studies', 50, 'A quick pick saves effort but skips the checks. Test it with one conversation and one fact check before you stop looking.'),
    ]),
  ],
  communication: [
    sc('listen', 'In a meeting, someone gives instructions quickly and you are not sure you caught everything. What do you do?', [
      o('Note what you can, stay quiet, and ask a colleague for their notes after the meeting', 33, 'Your colleague may have missed the same detail, and by then the speaker has moved on. Ask the speaker for the part you missed, even by message, within the day.'),
      o('At the next pause, say "Let me check I have this right" and repeat the main points back', 100, 'Repeating back lets the speaker correct you in seconds and shows you were listening. If the meeting moves too fast for that, do the same by message straight afterwards.'),
      o('After the meeting, send the speaker a short written summary and ask them to correct it', 67, 'A written summary is a strong fallback and leaves a record, but a mistake made during the meeting may already be spreading. Where you can, check at the moment as well.'),
      o('Nod along so you do not slow the meeting down, and work out the rest from the task itself', 17, 'Working it out alone is how a small missed detail turns into rework. A ten-second question in the meeting costs far less than redoing the task.'),
    ]),
    sc('listen', 'A friend or colleague is upset and starts telling you about their problem. What do you do?', [
      o('Give practical advice straight away so they can fix it today', 33, 'Quick advice can sound like you want the problem gone, not understood. Let them finish and say back what you heard before you suggest anything.'),
      o('Ask whether they want advice or just want to be heard, then do what they say', 100, 'Asking takes five seconds and removes the guesswork, because people differ in what they need when upset. Remember the answer, since it tells you how this person likes to be supported.'),
      o('Share a similar thing that happened to you so they know they are not alone', 50, 'A shared story can comfort, but it can pull the attention towards you. Keep it to a sentence and go back to their situation.'),
      o('Let them finish, say back what you heard, and leave it there unless they ask for more', 67, 'Saying back what you heard is a good response and is often enough. Check once whether they would also like ideas, so you do not leave them without help they wanted.'),
    ]),
    sc('write', 'You need to send a long email explaining a delay to a customer or teacher. What do you do?', [
      o('Write what happened in the order it happened, so the whole story is clear', 33, 'A full history makes the person search for the point. Start with what has changed and what happens next, and keep the history for the end or leave it out.'),
      o('Open with the new date and what you need from them, then give the reason briefly', 100, 'The person gets the answer and the action in the first two lines, and can stop reading there. Check that the date is one you can really keep before you send it.'),
      o('Keep it very short: say sorry for the delay and that you will update them soon', 50, 'Short is good, but an apology without a new date or a next step leaves the person with questions. Add both and the message is complete.'),
      o('Call them first to explain, then send a two-line email confirming the new date', 67, 'A call is a considerate first step for an upset customer or teacher, and the follow-up gives them something in writing. For a routine delay, the written message alone can come first.'),
    ]),
  ],
  'soft-skills': [
    sc('solve', 'A tool or process you use keeps failing and nobody around you can help. What do you do?', [
      o('Wait until a more experienced colleague is free, because trying fixes on your own could make things worse', 17, 'Waiting suits cases where the tool holds important data or others depend on it. Otherwise try safe fixes for twenty minutes first, and note each result so the helper starts from your notes.'),
      o('Try safe fixes for twenty minutes, write down what happened, then ask for help with your notes', 100, 'Asking with notes of what you tried saves the helper\'s time and shows initiative. Keep the notes in one file, as the same failure may return.'),
      o('Switch to a different tool for today\'s task and look into the failed one when there is time', 33, 'Switching can rescue today\'s task, but the original problem stays for the next person. Spend a short slot later this week finding out why it failed.'),
      o('Tell the person in charge that it is failing and move on to other work until it is fixed', 50, 'Reporting a fault is useful, but a bare report is hard to act on. Add the exact message you saw and what you tried so the next person can start straight away.'),
    ]),
    sc('solve', 'You have two ways to solve a problem and cannot be sure which is better. What do you do?', [
      o('Collect more information for a few more days, since choosing wrongly would waste everyone\'s effort', 17, 'Certainty may never come, and the days spent waiting have their own cost. Set a deadline for the decision, such as the end of tomorrow, and choose with what you know by then.'),
      o('Test both on a small piece and choose by what you see', 100, 'Small tests replace opinion with evidence at low cost. Decide beforehand what result would make you pick each option.'),
      o('Choose the one that is quicker for you, then switch if it causes trouble later', 50, 'Speed matters, but the quicker route can create work later. Ask yourself what the slower option protects, then decide.'),
      o('Ask a senior person which to pick, and bring both options and your reasoning along', 67, 'Bringing both options and your reasoning makes the answer quick and shows your thinking. Next time try a small test before you ask, so you bring evidence as well.'),
    ]),
    sc('lead', 'You want to change the way your team does a regular task. What do you do?', [
      o('Start doing it your way on your own tasks, and if the results look good, tell the team later', 33, 'Results can win people over, but a change nobody agreed to is often resisted once it touches their work. Share the plan before you use it on anything shared.'),
      o('Explain the problem, show the change on a small piece, and ask for views before rolling it out', 100, 'Showing a small result and asking for views builds support and catches problems. Pick the person most likely to object and ask them first.'),
      o('Mention the idea once in a meeting and leave it if nobody responds', 17, 'Raising it a single time is easy to miss in a busy meeting. Bring it back with an example and a clear suggestion on paper.'),
      o('Write the change and its benefits in a short note to your manager and ask them to announce it', 33, 'Going to the manager first is fair, but it bypasses the people who do the work. Share the note with your team first, then take it to the manager.'),
    ]),
  ],
};
