import { PaginationParams } from "@/core/repositories/pagination-params";
import { Question } from "../../enterprise/entities/question";
import { Slug } from "../../enterprise/entities/value-objec/slug";

export abstract class QuestionsRepository {
  abstract findById(id: string): Promise<Question | null>;
  abstract create(answer: Question): Promise<void>;
  abstract save(answer: Question): Promise<void>;
  abstract findBySlug(slug: Slug): Promise<Question | null>;
  abstract delete(question: Question): Promise<void>;
  abstract findManyRecent(params: PaginationParams): Promise<Question[]>;
}
