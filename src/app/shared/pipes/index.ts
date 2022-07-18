import { CreationDatePipe } from "./creation-date/creation-date.pipe";
import { DurationCustomPipe } from "./duration/duration.pipe";
import { StringJoinerPipe } from "./string-joiner/string-joiner.pipe";

export const PIPES = [
  DurationCustomPipe,
  CreationDatePipe,
  StringJoinerPipe
]
