/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { TAxiosError } from '@api/axios';
import { useToast } from '@hooks/useToast';
import { useMutation, useQuery } from '@tanstack/react-query';

export const createQueryHook = <TData, TError>(
  queryKey: unknown[],
  queryFn: () => Promise<TData>,
  enabled: boolean = true,
) => {
  return useQuery<TData, TError>({
    queryKey,
    queryFn: async () => {
      return await queryFn();
    },
    enabled,
  });
};

export const createMutationHook = <TData, TVariables>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  onSuccessCallbacks: (() => void)[] = [],
  toastMessage?: string,
) => {
  const { toast } = useToast();

  return useMutation({
    mutationFn,
    onSuccess: () => {
      onSuccessCallbacks.forEach(callback => callback());
      if (toastMessage) toast(toastMessage);
    },
    onError: (error: TAxiosError) => console.error(error.errorMessage),
  });
};
