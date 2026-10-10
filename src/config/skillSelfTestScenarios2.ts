// Round 3 situation questions for areas that had too few. Same shape as
// skillSelfTestScenarios.ts. General guidance only.
import type { SkillTestId } from './skillSelfTests';
import type { Scenario, ScenarioOption } from './skillSelfTestScenarios';

const o = (t: string, s: number, a: string): ScenarioOption => ({ t, s, a });
const sc = (d: string, text: string, opts: ScenarioOption[]): Scenario => ({ d, text, opts });

export const SCENARIOS_MORE: Record<SkillTestId, Scenario[]> = {
  'confused-after-10th': [
    sc('self', 'You are asked "What are you good at?" and you cannot think of an answer. What do you do?', [
      o('Say "nothing special" and change the topic', 0, 'Most people cannot answer this on the spot, but dropping it leaves the question open. Make a list over a week: tasks people ask you to help with, things you finish without being pushed, and subjects where you ask extra questions.'),
      o('Name the subject with your highest marks', 50, 'Marks are one clue, but they do not show what you enjoy or how you work. Add what you did in that subject that you liked, and what people say about your work.'),
      o('Say you are not sure yet and offer two or three things you want to try to find out', 100, 'Strong. Naming what you will test is a more useful answer than a guess. Pick one thing to try this month and note what you liked and disliked about it.'),
      o('Say whatever you think the person wants to hear', 17, 'An answer that pleases the listener tells you nothing about yourself. Write your own answer privately first, then decide what to share.'),
    ]),
    sc('options', 'A relative says "Only this course is worth doing now". What do you do?', [
      o('Accept it, because they have more experience', 17, 'Experience helps, but the field may have changed since they last looked. Treat their view as one source and check it against a current official one.'),
      o('Thank them, then check the course against official information and what other routes offer', 100, 'This is the strongest response. You respect the person and still build your own picture from current facts.'),
      o('Argue that they do not understand today\'s world', 33, 'Arguing rarely changes the view and can cost goodwill. Ask what they know about the course and share one fact that adds to it.'),
      o('Nod and do nothing', 0, 'Doing nothing leaves the claim unchecked. Spend an hour on official pages for the course and at least two other routes.'),
    ]),
    sc('action', 'You have a list of options but have not spoken to anyone about them. What is your next step?', [
      o('Keep reading about them online', 33, 'Reading helps, but it can become a way of delaying. Set a limit and then talk to a real person.'),
      o('Ask a teacher or counsellor three specific questions and book a time for it', 100, 'Strong. Specific questions with a date turn a list into progress.'),
      o('Wait for the results and decide then', 17, 'Waiting costs time you could use to narrow down the options. Do the research now so results only confirm the choice.'),
      o('Pick the one that sounds best and stop looking', 50, 'A quick pick saves effort but skips the checks. Test it with one conversation and one fact check first.'),
    ]),
  ],
  communication: [
    sc('listen', 'In a meeting, someone gives instructions quickly and you are not sure you caught everything. What do you do?', [
      o('Nod and sort it out later', 0, 'Missed details usually turn into mistakes. Ask for the part you missed at the time, or send a short message afterwards.'),
      o('Repeat the main points back and ask if you have understood correctly', 100, 'This is the strongest habit. Repeating back catches gaps early and shows the speaker you were listening.'),
      o('Ask a friend after the meeting', 50, 'It can work, but your friend may have missed something too. Check with the person who gave the instruction.'),
      o('Write down everything you remember and hope it is enough', 33, 'Notes help, but they may hold the wrong version. Confirm the key points with the speaker.'),
    ]),
    sc('listen', 'A friend or colleague is upset and starts telling you about their problem. What do you do?', [
      o('Give advice straight away to fix it', 33, 'Quick advice can feel like you are not listening. Let them finish, and ask whether they want advice or just want to be heard.'),
      o('Let them finish, say back what you heard, and ask what would help', 100, 'Strong. Reflecting what you heard shows you understood, and asking what would help avoids guessing.'),
      o('Tell them about a similar thing that happened to you', 50, 'A shared story can help, but it can also move attention to you. Keep it short and return to their situation.'),
      o('Check your phone while they talk and nod now and then', 0, 'People notice when attention is elsewhere. Put the phone away for this conversation.'),
    ]),
    sc('write', 'You need to send a long email explaining a delay to a customer or teacher. What do you do?', [
      o('Write everything that happened in the order it happened', 33, 'A full history makes the reader search for the point. Start with what has changed and what happens next.'),
      o('Start with the new date and what you need from them, then give a short reason', 100, 'This is the strongest structure. The reader gets the answer and the action in the first lines.'),
      o('Keep it very short and say "sorry for the delay"', 50, 'Short is good, but an apology without a new date or next step leaves the reader with questions. Add both.'),
      o('Delay sending it until you have the perfect words', 0, 'The delay becomes a second problem. Write a clear three-line version and send it.'),
    ]),
  ],
  'soft-skills': [
    sc('solve', 'A tool or process you use keeps failing and nobody around you can help. What do you do?', [
      o('Wait until someone with more experience is free', 17, 'Waiting can be right for a risky fix but is slow otherwise. Try two or three options first and note what happened.'),
      o('Search for the error, try two or three fixes, note the results, and then ask with that information', 100, 'Strong. Asking for help with what you tried saves the helper time and shows initiative.'),
      o('Switch to a different tool without checking why it failed', 33, 'A switch may solve today\'s task but leaves you unable to fix the cause. Spend a short time finding out why.'),
      o('Report that it does not work and move on to something else', 50, 'Reporting is useful, but add what you saw and tried so the next person can act on it.'),
    ]),
    sc('solve', 'You have two ways to solve a problem and cannot be sure which is better. What do you do?', [
      o('Wait until you are sure', 0, 'Certainty may never come. Set a time limit and pick based on what you know.'),
      o('Test both on a small piece and choose by what you see', 100, 'This is the strongest approach. A small test replaces opinion with evidence at low cost.'),
      o('Choose the one that is quicker for you', 50, 'Speed matters, but check that it does not create more work later.'),
      o('Ask a senior person to choose for you', 33, 'Asking is fine, but come with both options, your view and your reasoning so the answer is quick.'),
    ]),
    sc('lead', 'You want to change the way your team does a regular task. What do you do?', [
      o('Change it yourself and tell them afterwards', 33, 'Speed is useful, but a change people did not agree to is often resisted. Share the plan first.'),
      o('Explain the problem, show the change on a small piece, and ask for their views before rolling it out', 100, 'Strong. Showing a small result and asking for views builds support and catches problems.'),
      o('Mention it once and drop it if there is no response', 17, 'A single mention is easy to miss. Bring it up with an example and a clear suggestion.'),
      o('Wait for the manager to bring it up', 0, 'Waiting leaves the problem in place. Raise it with a short suggestion.'),
    ]),
  ],
};
