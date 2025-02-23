---
id: troubleshooting
title: Troubleshooting
---

## Troubleshooting

Thanks for giving this library a try! We are sorry that you might have encountered issues though. Here is how you can seek help:

1. Search over the [issues on Github](https://github.com/software-mansion/react-native-gesture-handler/issues). There is a chance someone had this problem in the past and it has been resolved!

2. When sure your problem hasn't been reported or was reported but the proposed solution doesn't work for you please follow [our issue reporting guidelines](#reporting-issues).

3. You can try seeking help on [Expo Developers Discord](https://chat.expo.dev/) where we often hang out.

4. If you feel like reading the source code I highly recommend it, as this is by far the best resource and gives you the most up to date insights into how the library works and what might be causing the bug.

5. If you managed to find the solution consider [contributing](contributing.md) a fix or update our documentation to make this information easier to find for the others in the future.

## Reporting issues

This library is maintained by a very small team.
Please be mindful of that when reporting issue and when it happens that we can't get back to you as soon as you might expect.
We would love to fix all the problems as soon as possible, but often our time is constraint with other issues/features or projects.
To make it easier for us to understand your issue and to be able to approach it sooner you can help by:

- Making sure the issue description is complete. Please include all the details about your environment (library version, RN version, device OS etc).
- It is the best to provide an example app that reproduces the issue you are having. Put it up on [gist](https://gist.github.com/), [snack](https://snack.expo.io) or create a repo on Github – it doesn't matter as long as we can easily pull it in, run and see the issue.
- Explain how you run your repro app and what steps to take to reproduce the issue.
- Isolate your issue from other dependencies you might be using and make the repro app as minimal as possible.
- If you have spent some time figuring out the root cause of the problem you can leave a note about your findings so far.
- **Do not comment on closed issues**. It is very unlikely that we are going to notice your comment in such a case. If the issue has been closed, but the proposed solution doesn't work for you, please open a new one providing all the information necessary and linking to the solution you have tried.

## It's not a bug, it's a feature

- Changing `enabled` prop during a gesture has no effect, only when a gesture starts (that is a finger touches the screen) the `enabled` prop is taken into consideration to decide whether to extract (or not) the gesture and provide it with stream of events to analyze.
- `Native` gesture may not conform to the standard state flow due to platform specific workarounds to incorporate native views into RNGH.
- Keep in mind that `Touchables` from RNGH are rendering two additional views that may need to be styled separately to achieve desired effect (`style` and `containerStyle` props).
- In order for the gesture composition to work, all composed gestures must be attached to the same `GestureHandlerRootView`.
