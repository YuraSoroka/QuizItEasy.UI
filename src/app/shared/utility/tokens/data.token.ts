import { InjectionToken } from "@angular/core";
import { QuestionData } from "../../models/question-data.model";

export const QUESTION_DATA = new InjectionToken<QuestionData>('DATA');
