export type statusType =
  | "complete"
  | "inProgress"
  | "toFix"
  | "failed"
  | string;

export type Bug = {
  name: string;
  status: statusType;
  created_at?: Date;
  date?: Date;
  updated_at?: string;
  project_id?: string;
};
