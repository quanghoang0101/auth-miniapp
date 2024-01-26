/*
 * Copyright 2017 WalmartLabs
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import UIKit
import ElectrodeContainer

@main
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // Override point for customization after application launch.
        
        let config = ElectrodeContainerConfig()
        config.debugEnabled = RunnerConfig.rnDevSupportEnabled
        config.packagerHost = RunnerConfig.packagerHost
        config.packagerPort = RunnerConfig.packagerPort
        ElectrodeReactNative.start(withConfigurations: config, ernDelegate: nil)
        let miniapp = ElectrodeReactNative.sharedInstance().miniApp(withName: "AuthMiniapp", properties: nil, overlay: false, sizeFlexibility: 0, delegate: nil)
        window = UIWindow(frame: UIScreen.main.bounds)
        window?.rootViewController = miniapp
        window?.makeKeyAndVisible()
        return true
    }

}

