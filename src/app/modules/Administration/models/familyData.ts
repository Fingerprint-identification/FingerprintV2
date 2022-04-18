/**
 * Data class for personData data
 */
 export class FamilyData {
  motherFristName ?: string;
  motherNotionalty ?: string;
  motherNotionalId ?: string;
  fatherFristName ?: string
  fatherNotionalty ?: string
  fatherNotionalId ?: string
  constructor(values: FamilyData) {
    Object.assign(this, values);
  }
}
