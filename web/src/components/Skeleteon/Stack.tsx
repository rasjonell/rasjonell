import { Skeleton, Stack } from '@chakra-ui/react'

interface Props {
  maxWidth?: number
}

export default ({ maxWidth = 200 }: Props) => (
  <Stack maxW={maxWidth}>
    <Skeleton height="20px" />
    <Skeleton height="20px" />
    <Skeleton height="20px" />
  </Stack>
)
