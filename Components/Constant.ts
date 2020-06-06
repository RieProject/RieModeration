export default class Constant {
  public static usage (usage: string): string {
    return `the correct usage is:\n\`\`\`${usage}\`\`\``
  }

  public static error (errMsg: string): string {
    return `something was happened, please report to admin and refer this error below:\n\`\`\`${errMsg}\`\`\``
  }
}
