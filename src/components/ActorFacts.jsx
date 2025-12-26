import SocialLinks from "./SocialLinks";

export default function ActorFacts({ actorFacts }) {
  const todayDate = new Date().toLocaleDateString("tr-TR").split(".").reverse();
  const actorBirthday = actorFacts.birthday.split("-");
  let actorAgeYear = todayDate[0] - actorBirthday[0];

  if (
    todayDate[1] < actorBirthday[1] ||
    (todayDate[1] === actorBirthday[1] && todayDate[2] < actorBirthday[2])
  ) {
    actorAgeYear -= 1;
  }

  return (
    <>
      <SocialLinks actorLinks={actorFacts.external_ids}></SocialLinks>
      <h3 className="fs-5 fw-bold">Kişisel Bilgiler</h3>
      <div>
        <div className="mb-3">
          <strong>
            <bdi>Bilinen İşi</bdi>
            <div className="fw-light">{actorFacts.known_for_department}</div>
          </strong>
        </div>
        <div className="mb-3">
          <strong>
            <bdi>Popularity</bdi>
            <div className="fw-light">{actorFacts.popularity}</div>
          </strong>
        </div>
        <div className="mb-3">
          <strong>
            <bdi>Cinsiyet</bdi>
            <div className="fw-light">
              {actorFacts.gender === 1 ? "Kadın" : "Erkek"}
            </div>
          </strong>
        </div>
        <div className="mb-3">
          <strong>
            <bdi>Doğum Tarihi</bdi>
            <div className="fw-light">
              {actorFacts.birthday !== null
                ? actorFacts.birthday + " " + `( ${actorAgeYear}  yaşında )`
                : "-"}
            </div>
          </strong>
        </div>
        <div className="mb-3">
          <strong>
            <bdi>Doğum Yeri</bdi>
            <div className="fw-light">
              {actorFacts.place_of_birth !== null
                ? actorFacts.place_of_birth
                : "-"}
            </div>
          </strong>
        </div>
        <div className="mb-3">
          <strong>
            <bdi>Ayrıca Şöyle De Bilinir</bdi>
            {actorFacts?.also_known_as?.length > 0 ? (
              actorFacts.also_known_as.slice(0, 6).map((fullName, index) => (
                <div key={index} className="fw-light">
                  {fullName}
                </div>
              ))
            ) : (
              <p className="fw-light">-</p>
            )}
          </strong>
        </div>
      </div>
    </>
  );
}
