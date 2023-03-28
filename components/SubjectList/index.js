import useSWR from "swr";
import { useRouter } from "next/router";
import { StyledButton } from "../Button/Button.styled";
import { StyledList } from "./SubjectList.styled";

export default function SubjectList() {
  const router = useRouter();
  const { data } = useSWR("/api/subjects");

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <StyledList>
      {data.map((subject) => (
        <li key={subject.id}>
          <StyledButton
            type="button"
            onClick={() => router.push(`/${subject.id}`)}
          >
            {subject.title}
          </StyledButton>
        </li>
      ))}
    </StyledList>
  );
}