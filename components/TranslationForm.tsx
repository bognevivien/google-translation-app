"use client";
import { TranslationLanguages } from "@/app/translate/page";
import React, { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useFormState } from "react-dom";
import translate from "@/actions/translate";

const initialState = {
  inputLanguage: "auto",
  input: "",
  outputLanguage: "en",
  output: "",
};

export type State = typeof initialState;

function TranslationForm({ languages }: { languages: TranslationLanguages }) {
  const [state, formAction] = useFormState(translate, initialState);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  console.log(state);

  useEffect(() => {
    if (state.output) {
      setOutput(state.output);
    }
  }, [state]);

  return (
    <div>
      <form action={formAction}>
        <div>
          <Select name="inputLanguage" defaultValue="auto">
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select a timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Want us to figure it out?</SelectLabel>
                <SelectItem key="auto" value="auto">
                  Auto-Detection
                </SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Language</SelectLabel>
                {Object.entries(languages.translation).map(([key, value]) => (
                  <SelectItem key={key} value={key}>
                    {value.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Textarea
            className="min-h-32 text-xl"
            name="input"
            placeholder="Type your message here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div>
          <Select name="outputLanguage" defaultValue="en">
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select a timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Want us to figure it out?</SelectLabel>
                <SelectItem key="auto" value="auto">
                  Auto-Detection
                </SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Language</SelectLabel>
                {Object.entries(languages.translation).map(([key, value]) => (
                  <SelectItem key={key} value={key}>
                    {value.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Textarea
            className="min-h-32 text-xl"
            name="output"
            placeholder="Type your message here"
            value={output}
            onChange={(e) => setOutput(e.target.value)}
          />
        </div>
        <div>
          <Button type="submit" variant="secondary">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TranslationForm;
