import axios from "axios";
import { useMutation, useQuery } from "react-query";

export const useNowQuery = () =>
  useQuery({
    queryKey: ["index"],
    queryFn: () =>
      axios.get<string>("https://ai-weekly-report-server.ygsgdbd.workers.dev"),
  });

export const useOpenAIBatchMutation = () =>
  useMutation({
    mutationFn: (data: {
      inputs: string[];
      openAI: {
        apiKey: string;
      };
    }) =>
      axios.post(
        "https://ai-weekly-report-server.ygsgdbd.workers.dev/api/v1/openai/batch",
        data,
      ),
  });
