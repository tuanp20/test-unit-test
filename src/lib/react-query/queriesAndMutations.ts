import { INewUser } from "@/types";
import { createUserAccount } from "../appwrite/api";
import { useMutation } from "@tanstack/react-query";

export const useCreateUserAccountMutation = () => {
  return useMutation({
    mutationFn: (user: INewUser) => createUserAccount(user),
  });
};
