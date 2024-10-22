import { NextRequest, NextResponse } from "next/server";

const createCounter = () => {
  let counter = 0;
  return {
    increment: () => {
      counter++;
    },
    decrement: () => {
      counter--;
    },
    reset: () => {
      counter = 0;
    },
    get: () => counter,
  };
};

const counter = createCounter();

export function GET() {
  const count = counter.get();
  return NextResponse.json({ count });
}

export async function POST(req: NextRequest) {
  const { action } = await req.json();
  if (action === "increment") {
    counter.increment();
  }
  if (action === "decrement") {
    counter.decrement();
  }
  if (action === "reset") {
    counter.decrement();
  }
  const count = counter.get();
  return NextResponse.json({ count });
}
