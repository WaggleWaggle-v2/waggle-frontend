import { fakerKO as faker } from '@faker-js/faker';
import { ADJECTIVE_DATA, NOUN_DATA } from '@pages/main/constants/nickname-data';

export function createRandomNickName() {
  const randomAdjective = faker.helpers.arrayElement(ADJECTIVE_DATA);
  const randomNoun = faker.helpers.arrayElement(NOUN_DATA);

  const nickname = `${randomAdjective}${randomNoun}`;
  return nickname;
}
