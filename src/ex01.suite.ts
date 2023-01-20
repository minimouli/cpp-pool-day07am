/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { GPP, Path, beforeAll, expect, suite, test } from '@minimouli/framework'

suite('Exercise 01', () => {

    let sources: Path[]

    beforeAll(async () => {
        sources = await Path.fromProject().glob('*.cpp')
    })

    test('Borg Ship', async () => {

        const gpp = new GPP([
            ...sources,
            Path.fromMoulinette('./res/ex01/borg_ship.cpp')
        ])
        const exec = await gpp.execute([
            `-I${Path.fromProject().toString()}`,
            `-I${Path.fromMoulinette('./res/headers').toString()}`,
            '-std=c++20'
        ])

        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).toOutput([
            'We are the Borgs. Lower your shields and surrender yourselves unconditionally.',
            'Your biological characteristics and technologies will be assimilated.',
            'Resistance is futile.',
            'Everything is in order.',
            'Critical failure imminent.',
            ''
        ])
    })

    test('Captain', async () => {

        const gpp = new GPP([
            ...sources,
            Path.fromMoulinette('./res/ex01/captain.cpp')
        ])
        const exec = await gpp.execute([
            `-I${Path.fromProject().toString()}`,
            `-I${Path.fromMoulinette('./res/headers').toString()}`,
            '-std=c++20'
        ])

        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).toOutput([
            'The ship USS Kreog has been finished.',
            'It is 289 m in length and 132 m in width.',
            'It can go to Warp 6!',
            'The captain James T. Kirk is 42 years old.',
            'James T. Kirk: I\'m glad to be the captain of the USS Kreog.',
            ''
        ])
    })

    test('Ensign', async () => {

        const gpp = new GPP([
            ...sources,
            Path.fromMoulinette('./res/ex01/ensign.cpp')
        ])
        const exec = await gpp.execute([
            `-I${Path.fromProject().toString()}`,
            `-I${Path.fromMoulinette('./res/headers').toString()}`,
            '-std=c++20'
        ])

        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).toOutput([
            'Ensign Pavel Chekov, awaiting orders.',
            ''
        ])
    })

})
