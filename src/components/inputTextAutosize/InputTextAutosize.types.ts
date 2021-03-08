export interface InputProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value: string;
  error: boolean;
  label: string;
  name: string;
  rowsMin: number;
  helperText?: string;
}
