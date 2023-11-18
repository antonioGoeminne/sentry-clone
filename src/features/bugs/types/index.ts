export type statusType =
  | "complete"
  | "inProgress"
  | "toFix"
  | "failed"
  | string;

export type Bug = {
  name: string;
  status: statusType;
  created_at: string;
  updated_at?: string;
};
