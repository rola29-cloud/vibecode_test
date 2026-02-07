using System;

// Generate a random target number between 1 and 100
// Random.Shared is a simple way to get a random number in modern C#
int targetNumber = Random.Shared.Next(1, 101);

// Variables to store the user's guess and count how many times they tried
int userGuess = 0;
int attempts = 0;

Console.WriteLine("Welcome to the 'Up & Down' Guessing Game!");
Console.WriteLine("I have picked a random number between 1 and 100.");
Console.WriteLine("Try to guess it!");

// Keep asking the user for a guess until they get it right
while (userGuess != targetNumber)
{
    Console.Write("\nPlease enter your guess: ");
    string? input = Console.ReadLine();

    // If the input is null, it means the input stream has ended (e.g., Ctrl+C or end of file)
    if (input == null)
    {
        break;
    }

    // Try to convert the input text into a whole number
    // int.TryParse returns true if successful, and false if the input is not a number
    // This provides basic error handling so the program doesn't crash on non-numeric input
    if (int.TryParse(input, out userGuess))
    {
        // Increment attempts for every valid numeric guess
        attempts++;

        // Compare the guess to the target number and provide feedback
        if (userGuess < targetNumber)
        {
            // If the guess is lower than the target, tell them to go UP
            Console.WriteLine("UP!");
        }
        else if (userGuess > targetNumber)
        {
            // If the guess is higher than the target, tell them to go DOWN
            Console.WriteLine("DOWN!");
        }
        else
        {
            // If the guess matches the target, they win!
            Console.WriteLine("CONGRATULATIONS! You guessed correctly!");
            Console.WriteLine($"Total attempts: {attempts}");
        }
    }
    else
    {
        // If the input was not a number (like letters or symbols), show an error message
        Console.WriteLine("Invalid input! Please enter a numeric value.");
    }
}
