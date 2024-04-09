const Card = ({ profilePic, name, location, bio, links }) => {
  return (
    <div className="bg-dark-grey p-6 w-full max-w-[327px] text-center space-y-6 rounded-xl md:p-10 md:max-w-[384px]">
      <img
        src={profilePic}
        width={88}
        height={88}
        className="block mx-auto rounded-full"
        alt="Profile Pic"
      />

      <div className="space-y-1">
        <h2 className="font-inter text-white text-2xl font-semibold">{name}</h2>
        <p className="font-inter text-neon-green text-sm font-bold">
          {location}
        </p>
      </div>

      <p className="font-inter text-white text-sm font-normal">{bio}</p>

      <div className="space-y-4">
        {links.map((link) => (
          <a
            className="block bg-grey p-3 rounded-lg font-inter text-white text-sm font-bold transition-colors hover:bg-neon-green hover:text-grey"
            href={link.href}
            key={link.name}
            target="_blank"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Card;
