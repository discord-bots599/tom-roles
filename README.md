# Tom's Random Quotes Bot

## Introduction
Welcome to the Tom's Random Quotes Bot repository! This project is dedicated to capturing the hilariously random and off-the-wall things our friend Tom says. If you know Tom, you know he's a never-ending source of laughter and surprise with his unique take on life. We've started this bot to share the joy Tom brings us with a wider audience and to keep a living record of his legendary remarks.

Tom's Random Quotes Bot randomly selects one of Tom's quotes and posts it to our Discord channel at configurable intervals. It's like having Tom pop into the conversation, brightening our day with something unexpected.

## How It Works
The bot works by reading from a JSON file that contains an array of Tom's quotes. At pre-configured intervals, the bot selects a quote at random and posts it to a specified Discord channel. It's our way of keeping Tom's spirit alive and kicking, even when he's not around to dazzle us with his verbal gymnastics.

## Contributing
We love that Tom's quotes bring smiles and laughter, and we invite you to contribute to this collection. Whether you're a long-time friend of Tom or you've just met him and experienced his unique perspective, your contributions are welcome. Here's how you can add more quotes to the bot:

1. **Find a Quote**: Capture a quote from Tom—be it from a conversation, a text message, or any other form of communication.
2. **Prepare the Quote**: Make sure the quote is concise and captures the essence of Tom's humor or wisdom without needing additional context.
3. **Edit the JSON File**: The quotes are stored in `tomMessages.json`. Follow the format below to add a new quote:

```json
{
  "intervalMinutes": 15,
  "messages": [
    "Existing quote 1.",
    "Existing quote 2.",
    "Your new quote here!"
  ]
}
```

4. **Submit a Pull Request**: Create a new branch for your submission, commit the updated JSON file, and submit a pull request. Please name your branch in a way that reflects the content of your update, such as `quote-YYYYMMDD`.

5. **Review**: One of the project maintainers will review your submission. We might reach out if we need clarification or adjustments before merging your quote into the main branch.

## Guidelines
- Ensure quotes are accurate and true to Tom's original wording.
- Avoid quotes that require a lot of context to be funny or interesting.
- Be respectful. Ensure the quote is something Tom would be comfortable sharing with the world.

## Getting Started
To set up the bot in your local environment or contribute to its development, refer to the `CONTRIBUTING.md` file for detailed instructions on getting started, setting up your environment, and submitting contributions.

## Support & Collaboration
Got questions, suggestions, or want to collaborate on another fun project? Reach out through the issues section or directly to the repository maintainers.

Thank you for keeping the spirit of Tom's humor alive and contributing to this fun project. Let's fill our days with laughter, one Tom quote at a time!


