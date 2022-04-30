/**
 * Data class for personData data
 */
 export class FamilyData {
  motherFristName ?: string;
  mothernationality ?: string;
  motherNotionalId ?: string;
  fatherFristName ?: string
  fathernationality ?: string
  fatherNotionalId ?: string
  constructor(values: FamilyData) {
    Object.assign(this, values);
  }
}
