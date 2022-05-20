import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function StaffCard() {
	return (
		<div className='border-[0.5px] flex border-chathams-50 h-72 py-4 px-6'>
			<div className='m-auto flex flex-row'>
				<div className='flex flex-col'>
					<div>
						<StaticImage
							src='../../images/sample_staff.png'
							alt='staff'
                            width={400}
						/>
					</div>

					<div>
						<div className='my-auto flex flex-row gap-x-14'>
							<Link
								className='my-auto'
								to='https://twitter.com/ideate_zone'
							>
								<div>
									<StaticImage
										src='../../images/twitter.svg'
										alt='Twitter'
                                        className="text-gray-500"
										height={20}
									/>
								</div>
							</Link>

							<Link
								className='my-auto'
								to='https://www.linkedin.com/in/ideatezone/'
							>
								<div>
									<StaticImage
										src='../../images/linkedin.svg'
										alt='LinkedIn'
										height={20}
									/>
								</div>
							</Link>

							<Link
								className='my-auto'
								to='https://instagram.com/ideate_zone'
							>
								<div>
									<StaticImage
										src='../../images/insta.svg'
										alt='Instagram'
										height={20}
									/>
								</div>
							</Link>
						</div>
					</div>
				</div>

				<div className='flex flex-col text-center gap-y-4 my-auto px-6'>
					<div>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Totam fugiat laborum dolorum autem nemo quasi,
						inventore voluptatibus officia! Doloribus aspernatur
						reiciendis harum nisi in eligendi vel odio quaerat
						ducimus aperiam.
					</div>

                    <div className="font-semibold text-2xl text-chathams">Hermann Arnold</div>

                    <div className="text-xs font-light text-chathams-400">Founder</div>
				</div>
			</div>
		</div>
	);
}
