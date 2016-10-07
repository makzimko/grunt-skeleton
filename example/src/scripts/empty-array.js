// This example is from the book _JavaScript: The Definitive Guide_.
// Written by David Flanagan.  Copyright (c) 1996 O'Reilly & Associates.
// This example is provided WITHOUT WARRANTY either expressed or implied.
// You may study, use, modify, and distribute it for any purpose.

// The constructor function
function EmptyArray(length)
{
    this.size = length;
    for(var i = 1; i <= length; i++)
        this[i] = 0;
}

// Using the constructor
a = new EmptyArray(32);