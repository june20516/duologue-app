export { ErrorCode } from '../gen/duologue/v1/common_pb';

export type ErrorCodeValue = string; // Proto enum keys are strings in JSON/JS usually, but let's check generated code.
// Actually, generated protobuf enums in TS are usually numbers (const enum) or objects.
// Let's defer exact type definition until I see common_pb.ts content.
// For now, I will just re-export ErrorCode.
