// app/api/verify-coupon/route.js

// app/api/verify-coupon/route.js

// Problem database
const problemsDatabase = {
  easy: [
    {
      id: 1,
      question: "Write a function that adds two numbers",
      functionName: "add",
      testCases: [[1, 2], [5, 3], [0, 7]],
      hint: "Simply return the sum of the two parameters"
    }
  ],
  medium: [
    {
      id: 2,
      question: "Write a function that checks if a string is a palindrome",
      functionName: "isPalindrome",
      testCases: ["racecar", "hello", "madam"],
      hint: "Compare the string with its reversed version"
    },
    {
      id: 3,
      question: "Write a function that counts vowels in a string",
      functionName: "countVowels",
      testCases: ["hello", "world", "aeiou"],
      hint: "Check each character if it's in ['a','e','i','o','u']"
    }
  ],
  hard: [
    {
      id: 4,
      question: "Write a function that flattens a nested array",
      functionName: "flatten",
      testCases: [
        [1, [2, [3]]],
        [[["a"]], "b", ["c"]]
      ],
      hint: "Use recursion to handle nested arrays"
    }
  ]
};

// Coupon database with fixed discount amounts
const couponsDatabase = {
  easy: ["bytewar10", "codex15"],
  medium: ["hack23", "dev20"],
  hard: ["dev33", "tech25"],
  // General coupons that work for any difficulty
  all: ["bytewar33", "hack50", "devfest"]
};

// Solution verifiers
const solutionVerifiers = {
  // Easy problems
  1: (code) => {
    try {
      const func = new Function('a', 'b', code + '\nreturn add(a, b)');
      return [[1, 2], [5, 3], [0, 7]].every(([a, b]) => func(a, b) === a + b);
    } catch {
      return false;
    }
  },
  // Medium problems
  2: (code) => {
    try {
      const func = new Function('str', code + '\nreturn isPalindrome(str)');
      return ["racecar", "hello", "madam"].every((test, i) => 
        func(test) === [true, false, true][i]
      );
    } catch {
      return false;
    }
  },
  3: (code) => {
    try {
      const func = new Function('str', code + '\nreturn countVowels(str)');
      return ["hello", "world", "aeiou"].every((test, i) => 
        func(test) === [2, 1, 5][i]
      );
    } catch {
      return false;
    }
  },
  // Hard problems
  4: (code) => {
    try {
      const func = new Function('arr', code + '\nreturn flatten(arr)');
      const testCases = [
        [1, [2, [3]]],
        [[["a"]], "b", ["c"]]
      ];
      const expected = [
        [1, 2, 3],
        ["a", "b", "c"]
      ];
      return testCases.every((test, i) => {
        const result = func(test);
        return JSON.stringify(result) === JSON.stringify(expected[i]);
      });
    } catch {
      return false;
    }
  }
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const difficulty = searchParams.get('difficulty') || 'medium';
  
  // Get random problem for the difficulty
  const problems = problemsDatabase[difficulty];
  if (!problems || problems.length === 0) {
    return Response.json({ error: "Invalid difficulty" }, { status: 400 });
  }
  
  const problem = problems[Math.floor(Math.random() * problems.length)];
  
  // Get coupon for the difficulty
  const coupons = couponsDatabase[difficulty];
  const coupon = coupons[Math.floor(Math.random() * coupons.length)];
  
  return Response.json({
    problem,
    coupon
  });
}

export async function POST(request) {
  const { problemId, code, difficulty } = await request.json();
  
  // Verify the solution
  const isCorrect = solutionVerifiers[problemId](code);
  
  if (!isCorrect) {
    return Response.json({ 
      verified: false,
      message: "Solution incorrect. Try again!" 
    });
  }
  
  // Get coupon for the difficulty
  const coupons = couponsDatabase[difficulty];
  const coupon = coupons[Math.floor(Math.random() * coupons.length)];
  
  // Valid coupon codes with their discount percentages
  const couponDiscounts = {
    "bytewar10": 10,
    "codex15": 15,
    "hack23": 23,
    "dev20": 20,
    "dev33": 33,
    "tech25": 25
  };
  
  return Response.json({
    verified: true,
    coupon,
    discount: couponDiscounts[coupon],
    message: "Problem solved correctly! Here's your coupon code."
  });
}